import { DataStore } from '@aws-amplify/datastore'
import { type User, UserAppointment } from '@/models'

async function getAppointmentUsers(appointmentID: string): Promise<User[]> {
  const uas = await DataStore.query(UserAppointment)

  return uas
    .filter(ua => ua.appointment.id === appointmentID)
    .map(ua => ua.user)
}

export default getAppointmentUsers
