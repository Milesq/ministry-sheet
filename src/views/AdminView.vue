<script lang="ts" setup>
import { computed, onMounted, ref, watchEffect } from 'vue'
import type { Appointment, PendingAppointment, Place } from '@/models'
import useAppointments from '@/stores/appointments'
import { makeCalEvents } from '@/common'

const activePlace = ref('my-calendar')
const appointments = useAppointments()

onMounted(() => {
  appointments.init()
})

watchEffect(() => {
  if (appointments.places.length)
    activePlace.value = appointments.places[0].name
})

const events = computed(() => {
  const place = appointments.places.find(
    ({ name }) => name === activePlace.value
  )

  if (!place) return []

  return makeCalEvents({
    appointments: getAppointments(place),
    pendingAppointments: getPendings(place),
  })
})

function getAppointments({ id }: Place): Appointment[] {
  return appointments.appointments?.filter(({ place }) => place.id === id)
}

function getPendings({ id }: Place): PendingAppointment[] {
  return appointments.pendingAppointments?.filter(
    ({ place }) => place.id === id
  )
}
</script>

<template>
  <section class="px-10">
    <el-tabs v-if="appointments.places?.length" v-model="activePlace">
      <el-tab-pane
        v-for="place in appointments.places"
        :key="place.id"
        :label="place.name"
        :name="place.name"
      >
        <AppCalendar v-if="activePlace === place.name" :events="events" />
      </el-tab-pane>
    </el-tabs>
  </section>
</template>
