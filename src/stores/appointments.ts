import { defineStore } from 'pinia'
import dayjs, { type Dayjs } from 'dayjs'
import { DataStore } from '@aws-amplify/datastore'
import { Appointment, Place, User, UserAppointment } from '@/models'
import { getAppointmentUsers, type AppointmentWithUsers } from '@/common'
import Errors from '@/errors'

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
    async add(date: Dayjs, place: Place) {
      const userStore = useUser()

      if (!userStore.isLoggedIn) {
        throw new Error('User is not logged in')
      }

      const termAlreadyOccupied = (await DataStore.query(UserAppointment)).some(
        ua => {
          const isTheSameUser = ua.user.name === userStore.user
          if (!isTheSameUser) {
            return false
          }

          return dayjs(ua.appointment.datetime).isSame(date, 'hour')
        }
      )

      if (termAlreadyOccupied) {
        throw new Error(Errors.TermAlreadyOccupied)
      }

      const [user] = await DataStore.query(
        User,
        c => c.name('eq', userStore.user!),
        {
          limit: 1,
        }
      )

      const appointment = await DataStore.save(
        new Appointment({
          place,
          approved: false,
          datetime: date.toISOString(),
        })
      )

      await DataStore.save(
        new UserAppointment({
          user,
          appointment,
        })
      )
    },
  },
})

export default useAppointments
