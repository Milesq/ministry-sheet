<script setup lang="ts">
import dayjs from 'dayjs'
import type { Appointment } from '@/models'
import type { CalendarEvent } from '@/common'

defineProps<{
  appointments: Appointment[]
}>()

const events: CalendarEvent[] = [
  {
    id: 'asdasd',
    content: 'Abc def',
    datetime: dayjs().hour(12),
  },
]
</script>

<template>
  <div class="flex justify-center">
    <AppCalendar :events="events" />
  </div>
</template>
