<script lang="ts" setup>
import { onMounted, ref } from 'vue'
import dayjs from 'dayjs'
import { DataStore } from '@aws-amplify/datastore'
import useAppointments from '@/stores/appointments'
import { Place } from '@/models'
import type { AppointmentWithUsers } from '@/common'

const appointments = useAppointments()
const places = ref<Place[]>()

const activePlace = ref('my-calendar')

onMounted(() => {
  const monday = dayjs().weekday(0).subtract(1, 'day').toISOString()
  const sunday = dayjs().weekday(6).add(1, 'day').toISOString()

  appointments.loadEvents(monday, sunday)

  DataStore.query(Place).then(places_ => {
    places.value = places_
  })
})

function getAppointments({ id }: Place): AppointmentWithUsers[] {
  return appointments.appointments?.filter(
    ({ appointment: { place } }) => place.id === id
  )
}
</script>

<template>
  <section class="px-10">
    <el-tabs v-if="places?.length" v-model="activePlace" class="demo-tabs">
      <el-tab-pane label="Mój kalendarz" name="my-calendar">
        <ShowAppointments
          v-if="activePlace === 'my-calendar'"
          :appointments="appointments.appointments"
        />
      </el-tab-pane>

      <el-tab-pane
        v-for="place in places"
        :key="place.id"
        :label="place.name"
        :name="place.name"
      >
        <ShowAppointments
          v-if="activePlace === place.name"
          :appointments="getAppointments(place)"
        />
      </el-tab-pane>
    </el-tabs>
  </section>
</template>
