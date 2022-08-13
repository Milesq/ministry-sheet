<script setup lang="ts">
import { computed } from 'vue'
import dayjs, { type Dayjs } from 'dayjs'
import { useI18n } from 'vue-i18n'
import groupBy from 'lodash.groupby'
import { Swal } from '@/common'
import useAppointments from '@/stores/appointments'
import type { Place, Appointment, PendingAppointment } from '@/models'
import type { CalendarEvent } from '@/common'
import Errors from '@/errors'

const props = defineProps<{
  appointments: Appointment[]
  pendingAppointments: PendingAppointment[]
  place?: Place
}>()

const { t } = useI18n()

const appointments = useAppointments()

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

const events = computed<CalendarEvent[]>(() => {
  const grouped = groupBy(
    [...props.appointments, ...props.pendingAppointments],
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
      title: !props.place ? appointment.place.name : '',
      pending: isPending,
    } as CalendarEvent
  })
})

async function missingPlaceSwal() {
  const dontShowAgainKey = 'dont-show-missing-place-again'
  const shouldNotShowMissingPlace = localStorage.getItem(dontShowAgainKey)
  if (shouldNotShowMissingPlace) return

  const { value } = await Swal.fire({
    title: t('error.err'),
    text: t('error.missingPlace'),
    icon: 'error',
    input: 'checkbox',
    inputPlaceholder: t('dontShowAgain'),
  })

  if (value) {
    localStorage.setItem(dontShowAgainKey, 'true')
  }
}

async function addEvent(date: Dayjs) {
  if (!props.place) {
    await missingPlaceSwal()

    return
  }

  if (date.isBefore(dayjs())) {
    Swal.fire(t('error.dateInThePast'), '', 'error')
    return
  }

  const day = date.format('D MMMM')
  const hour = date.format('H:mm')
  const formattedDate = t('confirmDate.dateFormat', { day, hour })

  const { isConfirmed } = await Swal.fire({
    title: t('confirmDate.question'),
    text: formattedDate,
    icon: 'question',
    showCancelButton: true,
    reverseButtons: true,
    confirmButtonText: t('confirm[1]'),
    cancelButtonText: t('cancel'),
  })

  if (!isConfirmed) {
    return
  }

  try {
    await appointments.add(date, props.place)
    Swal.fire(t('success'), t('waitForApprove'), 'success')
  } catch (err: unknown) {
    if (!(err instanceof Error) || err.message !== Errors.TermAlreadyOccupied) {
      throw err
    }

    Swal.fire(t('error.err'), t('error.alreadyFilled'), 'error')
  }
}
</script>

<template>
  <div class="flex justify-center">
    <AppCalendar :events="events" @onEventAdd="addEvent" :addEvents="!!place" />
  </div>
</template>
