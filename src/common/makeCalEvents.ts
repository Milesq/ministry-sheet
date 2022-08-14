import groupBy from 'lodash.groupby'
import type { Appointment, PendingAppointment, Place } from '@/models'
import type { CalendarEvent } from '@/common'
import dayjs from 'dayjs'

function u(text: string) {
  return `<u>${text}</u>`
}

function mergeAppointmentsWithPendings(
  arg: Array<Appointment & PendingAppointment>
) {
  return arg.reduce((acc: string[], curr) => {
    const newElements = (curr.owner ? [u(curr.owner)] : curr.users) as string[]

    return [...acc, ...newElements]
  }, [])
}

function isAppPending(a: Appointment | PendingAppointment): boolean {
  return !!(a as PendingAppointment).owner
}

interface CalEventsArgs {
  place?: Place
  appointments: Appointment[]
  pendingAppointments: PendingAppointment[]
}

function makeCalEvents({
  appointments,
  pendingAppointments,
  place,
}: CalEventsArgs) {
  const grouped = groupBy(
    [...appointments, ...pendingAppointments],
    e => e.place.id + e.datetime
  )

  return Object.values(grouped).map(appointments => {
    const [appointment] = appointments
    const isPending = appointments.some(a => isAppPending(a))
    const users = mergeAppointmentsWithPendings(appointments)

    return {
      id: appointment.id,
      content: users,
      datetime: dayjs(appointment.datetime),
      title: !place ? appointment.place.name : '',
      pending: isPending,
    } as CalendarEvent
  })
}

export default makeCalEvents
