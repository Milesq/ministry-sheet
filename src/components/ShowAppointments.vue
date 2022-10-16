<script setup lang="ts">
import { computed } from 'vue'
import dayjs, { type Dayjs } from 'dayjs'
import { useI18n } from 'vue-i18n'
import { type Place, type Appointment, PendingAppointment } from '@/models'
import { Swal, makeCalEvents, i18nFormat } from '@/common'
import useAppointments from '@/stores/appointments'
import Errors from '@/errors'
import { DataStore } from '@aws-amplify/datastore'

const props = defineProps<{
  appointments: Appointment[]
  pendingAppointments: PendingAppointment[]
  place?: Place
}>()

const { t } = useI18n()

const appointments = useAppointments()
const events = computed(() =>
  makeCalEvents({
    appointments: props.appointments,
    pendingAppointments: props.pendingAppointments,
    place: props.place,
  })
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

  return appointments.places.find(({ id }) => id === selectedPlace)!
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

async function removeEvent(id: string) {
  const pa = await DataStore.query(PendingAppointment, id)

  if (!pa) {
    throw new Error('Pending appointment not found')
  }

  const date = dayjs(pa.datetime)

  const day = date.format('D MMMM')
  const hour = date.format('H:mm')

  const formattedDate = t('confirmDate.dateFormat', {
    day,
    hour,
    place: pa.place.name,
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

  if (isConfirmed) {
    await DataStore.delete(pa!)
  }
}
</script>

<template>
  <div class="flex justify-center">
    <AppCalendar
      :events="events"
      @onEventClick="addEvent"
      :addEvents="!!place"
      :events-removable="true"
      @onEventRemove="removeEvent"
    />
  </div>
</template>
