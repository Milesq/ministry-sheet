import { defineStore } from 'pinia'
import dayjs, { type Dayjs } from 'dayjs'
import { DataStore } from '@aws-amplify/datastore'
import { PendingAppointment, Appointment, Place } from '@/models'
import Errors from '@/errors'

import useUser from './user'

interface AppointmentsState {
  appointments: Appointment[]
  pendingAppointments: PendingAppointment[]
  places: Place[]
}

const useAppointments = defineStore('appointments', {
  state: (): AppointmentsState => ({
    appointments: [],
    pendingAppointments: [],
    places: [],
  }),
  getters: {
    myPendings(state) {
      const { user, isAdmin } = useUser()

      if (!isAdmin) return state.pendingAppointments

      return state.pendingAppointments.filter(({ owner }) => owner === user)
    },
  },
  actions: {
    async init() {
      const monday = dayjs().weekday(0).subtract(1, 'day').toISOString()
      const sunday = dayjs().weekday(6).add(1, 'day').toISOString()

      DataStore.query(Place).then(places => {
        this.places = places
      })

      await this.loadEvents(monday, sunday)

      DataStore.observeQuery(Appointment).subscribe(({ items }) => {
        this.appointments = items
      })

      DataStore.observeQuery(PendingAppointment).subscribe(({ items }) => {
        this.pendingAppointments = items
      })
    },
    async loadEvents(after: string, before: string) {
      const appointments = await DataStore.query(Appointment, c =>
        c.and(c => c.datetime('gt', after).datetime('lt', before))
      )

      this.appointments = appointments
    },
    async add(date: Dayjs, place: Place) {
      const userStore = useUser()

      if (!userStore.isLoggedIn) {
        throw new Error('User is not logged in')
      }

      const termAlreadyOccupied = this.appointments.some(app => {
        const isTheSameUser = app.users?.includes(userStore.user)
        if (!isTheSameUser) {
          return false
        }

        return dayjs(app.datetime).isSame(date, 'hour')
      })

      if (termAlreadyOccupied) {
        throw new Error(Errors.TermAlreadyOccupied)
      }

      await DataStore.save(
        new PendingAppointment({
          place,
          datetime: date.toISOString(),
          owner: userStore.user,
        })
      )
    },
  },
})

export default useAppointments
