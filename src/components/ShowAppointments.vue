<script setup lang="ts">
import { computed } from 'vue'
import dayjs, { type Dayjs } from 'dayjs'
import { Swal } from '@/common'
import useAppointments from '@/stores/appointments'
import type { Place } from '@/models'
import type { AppointmentWithUsers, CalendarEvent } from '@/common'

const props = defineProps<{
  appointments: AppointmentWithUsers[]
  place?: Place
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

async function addEvent(date: Dayjs) {
  if (!props.place) {
    Swal.fire(
      'Błąd',
      'Najpierw wybierz miejsce w którym chcesz stanąć',
      'error'
    )
    return
  }

  const day = date.locale('pl').format('D MMMM')
  const hour = date.locale('pl').format('H:mm')
  const formattedDate = `${day} o godzinie ${hour}`

  const { isConfirmed } = await Swal.fire({
    title: 'Czy chcesz się zapisać?',
    text: formattedDate,
    icon: 'question',
    showCancelButton: true,
    reverseButtons: true,
    confirmButtonText: 'Tak, potwierdź',
    cancelButtonText: 'Anuluj',
  })

  if (!isConfirmed) {
    return
  }

  await appointments.add(date, props.place)
  Swal.fire('Sukces', 'Poczekaj na zatwierdzenie', 'success')
}
</script>

<template>
  <div class="flex justify-center">
    <AppCalendar :events="events" @onEventAdd="addEvent" />
  </div>
</template>
