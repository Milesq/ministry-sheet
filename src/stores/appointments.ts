import { defineStore } from 'pinia'
import dayjs, { type Dayjs } from 'dayjs'
import { DataStore } from '@aws-amplify/datastore'
import { Appointment, Place } from '@/models'
import Errors from '@/errors'

import useUser from './user'

interface AppointmentsState {
  appointments: Appointment[]
  places: Place[]
}

const useAppointments = defineStore('appointments', {
  state: (): AppointmentsState => ({
    appointments: [],
    places: [],
  }),
  actions: {
    async init() {
      const monday = dayjs().weekday(0).subtract(1, 'day').toISOString()
      const sunday = dayjs().weekday(6).add(1, 'day').toISOString()

      DataStore.query(Place).then(places => {
        this.places = places
      })

      await this.loadEvents(monday, sunday)

      DataStore.observeQuery(Appointment, c =>
        c.approved('eq', true)
      ).subscribe(({ items }) => {
        this.appointments = items
      })
    },
    async loadEvents(after: string, before: string) {
      const appointments = await DataStore.query(Appointment, c =>
        c.and(c =>
          c.approved('eq', true).datetime('gt', after).datetime('lt', before)
        )
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

      const oldAppointment = (
        await DataStore.query(Appointment, c =>
          c.datetime('eq', date.toISOString())
        )
      ).find(c => c.place.id === place.id)

      const makeNewAppointment = () =>
        new Appointment({
          place,
          approved: false,
          datetime: date.toISOString(),
          users: [userStore.user],
        })

      const updateAppointment = () =>
        Appointment.copyOf(oldAppointment!, updated => {
          updated.users?.push(userStore.user)
        })

      const appointment = oldAppointment
        ? updateAppointment()
        : makeNewAppointment()

      await DataStore.save(appointment)
    },
  },
})

export default useAppointments
