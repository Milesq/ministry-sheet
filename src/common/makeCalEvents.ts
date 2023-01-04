import groupBy from 'lodash.groupby'
import type { Appointment, PendingAppointment, Place } from '@/models'
import type { CalendarEvent } from '@/common'
import dayjs from 'dayjs'
import useUser from '@/stores/user'

function u(text: string) {
  return `<u>${text}</u>`
}

function getUsersFromAppAndPendings(
  arg: Array<Appointment & PendingAppointment>
) {
  return arg.reduce((acc: string[], curr) => {
    const ownerName = curr.ownerName || curr.owner
    const newElements = (ownerName ? [u(ownerName)] : curr.users) as string[]

    return [...acc, ...(newElements || [])]
  }, [])
}

function isAppPending(a: Appointment | PendingAppointment): boolean {
  return !!(a as PendingAppointment).ownerName
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
}: CalEventsArgs): CalendarEvent[] {
  const user = useUser()
  const grouped = groupBy(
    [...appointments, ...pendingAppointments],
    e => e.place.id + e.datetime
  )

  return Object.values(grouped).map(appointments => {
    const [appointment] = appointments
    const isPending = appointments.some(a => isAppPending(a))
    const users = getUsersFromAppAndPendings(appointments)
    const isMyAppointment = (appointments as Appointment[]).some(a =>
      a.users?.includes?.(user.name)
    )

    return {
      id: appointment.id,
      content: users,
      datetime: dayjs(appointment.datetime),
      title: !place ? appointment.place.name : '',
      pending: isPending,
      removable: isPending || isMyAppointment,
    } as CalendarEvent
  })
}

export default makeCalEvents
