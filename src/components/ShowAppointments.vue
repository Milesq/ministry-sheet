<script setup lang="ts">
import { computed } from 'vue'
import dayjs, { type Dayjs } from 'dayjs'
import { useI18n } from 'vue-i18n'
import type { Place, Appointment, PendingAppointment } from '@/models'
import { Swal, makeCalEvents } from '@/common'
import useAppointments from '@/stores/appointments'
import Errors from '@/errors'

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
    await appointments.addPending(date, props.place)
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
    <AppCalendar
      :events="events"
      @onEventClick="addEvent"
      :addEvents="!!place"
    />
  </div>
</template>
