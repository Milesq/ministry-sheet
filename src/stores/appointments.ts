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

      DataStore.query(Place).then(places => {
        this.places = places
      })

      await this.loadEvents(monday, sunday)

      DataStore.observeQuery(Appointment, c =>
        c.approved('eq', true)
      ).subscribe(async appointments => {
        this.appointments = await this.fillUsers(appointments.items)
      })
    },
    async fillUsers(appointments: Appointment[]) {
      const appointmentsWithUsers = appointments.map(async appointment => ({
        appointment,
        users: await getAppointmentUsers(appointment.id),
      }))

      return Promise.all(appointmentsWithUsers)
    },
    async loadEvents(after: string, before: string) {
      const appointments = await DataStore.query(Appointment, c =>
        c.and(c =>
          c.approved('eq', true).datetime('gt', after).datetime('lt', before)
        )
      )

      this.appointments = await this.fillUsers(appointments)
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

      const oldAppointment = (
        await DataStore.query(Appointment, c =>
          c.datetime('eq', date.toISOString())
        )
      ).find(c => c.place.id === place.id)

      const newAppointment = () =>
        DataStore.save(
          new Appointment({
            place,
            approved: false,
            datetime: date.toISOString(),
          })
        )

      const appointment = oldAppointment || (await newAppointment())

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
