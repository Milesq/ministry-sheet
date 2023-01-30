import { defineStore } from 'pinia'
import dayjs, { type Dayjs } from 'dayjs'
import { DataStore } from '@aws-amplify/datastore'
import groupBy from 'lodash.groupby'
import { PendingAppointment, Appointment, Place } from '@/models'
import Errors from '@/errors'

import useUser, { transformUserName } from './user'

interface AppointmentsState {
  appointments: Appointment[]
  pendingAppointments: PendingAppointment[]
  places: Place[]
  initialized: boolean
}

const useAppointments = defineStore('appointments', {
  state: (): AppointmentsState => ({
    appointments: [],
    pendingAppointments: [],
    places: [],
    initialized: false,
  }),
  getters: {
    myPendings(state) {
      const { name, isAdmin } = useUser()

      if (!isAdmin) return state.pendingAppointments

      return state.pendingAppointments.filter(
        ({ ownerName }) => ownerName === name
      )
    },
    byPlaces(state): Record<string, PendingAppointment[]> {
      return groupBy(state.pendingAppointments, 'placeID')
    },
  },
  actions: {
    async init() {
      if (this.initialized) return
      this.initialized = true

      const monday = dayjs().weekday(0).subtract(1, 'day').toISOString()
      const sunday = dayjs().weekday(6).add(1, 'day').toISOString()

      DataStore.observeQuery(Place).subscribe(({ items }) => {
        this.places = items
      })

      await this.loadEvents(monday, sunday)

      DataStore.observeQuery(Appointment, c => c.datetime.gt(monday)).subscribe(
        ({ items }) => {
          this.appointments = items
        }
      )

      DataStore.observeQuery(PendingAppointment).subscribe(({ items }) => {
        this.pendingAppointments = items
      })
    },
    async loadEvents(after: string, before: string) {
      const appointments = await DataStore.query(Appointment, c =>
        c.and(c => [c.datetime.gt(after), c.datetime.lt(before)])
      )

      this.appointments = appointments
    },
    async addPending(date: Dayjs, place: Place) {
      const userStore = useUser()

      if (!userStore.isLoggedIn) {
        throw new Error('User is not logged in')
      }

      const termAlreadyOccupiedByThisUser = this.appointments.some(app => {
        const isTheSameUser = app.users?.some(
          user => transformUserName(user || '') === userStore.user
        )
        if (!isTheSameUser) {
          return false
        }

        return dayjs(app.datetime).isSame(date, 'hour')
      })

      const termAlreadyReserved = this.pendingAppointments.some(app => {
        const isTheSameUser =
          transformUserName(app.ownerName || '') === userStore.user
        if (!isTheSameUser) {
          return false
        }

        return dayjs(app.datetime).isSame(date, 'hour')
      })

      if (termAlreadyOccupiedByThisUser || termAlreadyReserved) {
        throw new Error(Errors.TermAlreadyOccupied)
      }

      await DataStore.save(
        new PendingAppointment({
          place,
          datetime: date.toISOString(),
          owner: userStore.user,
          ownerName: userStore.name,
        })
      )
    },
    async confirm(id: string) {
      const pa = await DataStore.query(PendingAppointment, id)

      if (!pa) {
        throw new Error(Errors.PendingAppointmentNotFound)
      }

      const { datetime, ownerName } = pa
      const place = await pa.place

      const oldAppointment = (
        await DataStore.query(Appointment, c => c.datetime.eq(datetime))
      ).find(c => c.placeID === place.id)

      if (oldAppointment) {
        await DataStore.save(
          Appointment.copyOf(oldAppointment, updated => {
            updated.users?.push(ownerName!)
          })
        )
      } else {
        await DataStore.save(
          new Appointment({
            place,
            datetime,
            users: [ownerName!],
          })
        )
      }

      await DataStore.delete(pa)
    },
    async deny(id: string) {
      const pa = await DataStore.query(PendingAppointment, id)

      if (!pa) {
        throw new Error(Errors.PendingAppointmentNotFound)
      }

      await DataStore.delete(pa)
    },
    async remove(id: string, user?: string) {
      const app = await DataStore.query(Appointment, id)

      if (!app) {
        throw new Error(Errors.PendingAppointmentNotFound)
      }

      if (app.users?.length === 1) {
        await DataStore.delete(app!)

        return
      }

      const currentUser = useUser()

      const userToRemove = user || currentUser.name

      await DataStore.save(
        Appointment.copyOf(app as Appointment, updated => {
          updated.users = updated.users?.filter(
            appUserName => appUserName !== userToRemove
          )
        })
      )
    },
  },
})

export default useAppointments
