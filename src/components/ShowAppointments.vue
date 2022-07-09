<script setup lang="ts">
import { computed } from 'vue'
import dayjs from 'dayjs'
import useAppointments from '@/stores/appointments'
import type { AppointmentWithUsers, CalendarEvent } from '@/common'

const props = defineProps<{
  appointments: AppointmentWithUsers[]
}>()

const appointments = useAppointments()

function makeAppointmentContent(appointment: AppointmentWithUsers): string[] {
  return appointment.users.map(user => user.name)
}

const events = computed<CalendarEvent[]>(() => {
  return props.appointments.map(
    appointment =>
      ({
        id: appointment.appointment.id,
        content: makeAppointmentContent(appointment),
        datetime: dayjs(appointment.appointment.datetime),
      } as CalendarEvent)
  )
})
</script>

<template>
  <div class="flex justify-center">
    <AppCalendar :events="events" @onEventAdd="addEvent" />
  </div>
</template>
