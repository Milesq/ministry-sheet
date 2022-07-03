<script setup lang="ts">
import dayjs from 'dayjs'
import type { Appointment } from '@/models'
import type { CalendarEvent } from '@/common'
import { computed } from 'vue'

const props = defineProps<{
  appointments: Appointment[]
}>()

function makeAppointmentContent(appointment: Appointment): string[] {
  return 'Miłosz Wiśniewski\nMiłosz Wiśniewski\nMiłosz Wiśniewski'.split('\n')
}

const events = computed<CalendarEvent[]>(() => {
  return props.appointments.map(
    appointment =>
      ({
        id: appointment.id,
        content: makeAppointmentContent(appointment),
        datetime: dayjs(appointment.datetime),
      } as CalendarEvent)
  )
})
</script>

<template>
  <div class="flex justify-center">
    <AppCalendar :events="events" />
  </div>
</template>
