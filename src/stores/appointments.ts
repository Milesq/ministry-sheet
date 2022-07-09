import { defineStore } from 'pinia'
import dayjs, { type Dayjs } from 'dayjs'
import { DataStore } from '@aws-amplify/datastore'
import { Appointment, Place } from '@/models'
import { getAppointmentUsers, type AppointmentWithUsers } from '@/common'

import useUser from './user'

interface AppointmentsState {
  appointments: AppointmentWithUsers[]
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

      this.loadEvents(monday, sunday)

      this.places = await DataStore.query(Place)
    },
    async loadEvents(after: string, before: string) {
      const appointments = await DataStore.query(Appointment, c =>
        c.and(c => c.datetime('gt', after).datetime('lt', before))
      )
      const appointmentsWithUsers = appointments.map(async appointment => ({
        appointment,
        users: await getAppointmentUsers(appointment.id),
      }))

      this.appointments = await Promise.all(appointmentsWithUsers)
    },
  },
})

export default useAppointments
