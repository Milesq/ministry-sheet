import { defineStore } from 'pinia'
import { DataStore } from '@aws-amplify/datastore'
import { Appointment } from '@/models'
import { getAppointmentUsers, type AppointmentWithUsers } from '@/common'

interface AppointmentsState {
  appointments: AppointmentWithUsers[]
}

const useAppointments = defineStore('appointments', {
  state: (): AppointmentsState => ({
    appointments: [],
  }),
  actions: {
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
