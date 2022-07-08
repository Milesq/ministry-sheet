import type { Appointment, User } from '@/models'

interface AppointmentWithUsers {
  appointment: Appointment
  users: User[]
}

export default AppointmentWithUsers
