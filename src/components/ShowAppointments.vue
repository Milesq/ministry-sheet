<script setup lang="ts">
import { computedAsync } from '@vueuse/core'
import dayjs, { type Dayjs } from 'dayjs'
import { useI18n } from 'vue-i18n'
import { type Place, Appointment, PendingAppointment } from '@/models'
import { DataStore } from '@aws-amplify/datastore'
import { Swal, makeCalEvents, i18nFormat, type CalendarEvent } from '@/common'
import useAppointments from '@/stores/appointments'
import useUser from '@/stores/user'
import Errors from '@/errors'

const props = defineProps<{
  appointments: Appointment[]
  pendingAppointments: PendingAppointment[]
  place?: Place
}>()

const { t } = useI18n()
const user = useUser()

const appointments = useAppointments()
const events = computedAsync(
  () =>
    makeCalEvents({
      appointments: props.appointments,
      pendingAppointments: props.pendingAppointments,
      place: props.place,
    }),
  []
)

async function missingPlaceSwal(): Promise<Place> {
  const inputOptions = Object.fromEntries(
    appointments.places.map(({ id, name }) => [id, name])
  )

  const { isConfirmed, value: selectedPlace } = await Swal.fire({
    title: t('error.err'),
    text: t('choosePlace'),
    input: 'select',
    inputOptions,
    inputPlaceholder: '-',
    showCancelButton: true,
    reverseButtons: true,
    confirmButtonText: t('confirm[2]'),
    cancelButtonText: t('cancel'),
    preConfirm(val) {
      if (!val) {
        Swal.showValidationMessage(t('fulfillForm[0]'))
      }
    },
  })

  if (!isConfirmed || !selectedPlace) {
    throw new Error(Errors.Cancelled)
  }

  return appointments.places.find(({ id }) => id === selectedPlace) as Place
}

async function addBlockedEvent(date: Dayjs, place: Place) {
  await appointments.addConfirmed(date, place)
}

async function addEvent(date: Dayjs) {
  let { place } = props

  if (date.isBefore(dayjs())) {
    Swal.fire(t('error.dateInThePast'), '', 'error')
    return
  }

  if (!place) {
    try {
      place = await missingPlaceSwal()
    } catch {
      return
    }
  }

  if (user.user === 'blocked') {
    return addBlockedEvent(date, place)
  }

  const day = i18nFormat(date, 'D MMMM')
  const hour = date.format('H:mm')
  const formattedDate = t('confirmDate.dateFormat', {
    day,
    hour,
    place: place.name,
  })

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
    await appointments.addPending(date, place)
    Swal.fire(t('success'), t('waitForApprove'), 'success')
  } catch (err: unknown) {
    if (!(err instanceof Error) || err.message !== Errors.TermAlreadyOccupied) {
      throw err
    }

    Swal.fire(t('error.err'), t('error.alreadyFilled'), 'error')
  }
}

async function removeEvent({
  id,
  pending,
}: Pick<CalendarEvent, 'id' | 'pending'>) {
  const model = pending ? PendingAppointment : Appointment
  const app = await DataStore.query(model, id)

  if (!app) {
    throw new Error('Pending appointment not found')
  }

  const date = dayjs(app.datetime)

  const day = date.format('D MMMM')
  const hour = date.format('H:mm')

  const formattedDate = t('confirmDate.dateFormat', {
    day,
    hour,
    place: (await app.place).name,
  })

  const { isConfirmed } = await Swal.fire({
    title: t('confirmDelete'),
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

  if (pending) {
    await DataStore.delete(app!)

    return
  }

  await Swal.fire({
    text: t('alreadyApprovedWarning'),
    icon: 'warning',
  })

  await appointments.remove(app.id)
}
</script>

<template>
  <div class="flex justify-center">
    <AppCalendar
      :events="events"
      :addEvents="!!place"
      :events-removable="true"
      @event-click="addEvent"
      @event-remove="removeEvent"
    />
  </div>
</template>
