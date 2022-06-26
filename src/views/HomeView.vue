<script lang="ts" setup>
import { onMounted, ref } from 'vue'
import { DataStore } from '@aws-amplify/datastore'
import { Place, Appointment } from '@/models'

import ShowAppointments from '../components/ShowAppointments.vue'

const appointments = ref<Appointment[]>()
const places = ref<Place[]>()

const activePlace = ref('my-calendar')

onMounted(async () => {
  const msInDay = 1000 * 3600 * 24
  const yesterday = new Date(new Date().getTime() - msInDay).toISOString()

  ;[places.value, appointments.value] = await Promise.all([
    DataStore.query(Place),
    DataStore.query(Appointment, c => c.datetime('gt', yesterday)),
  ])
})

function getAppointments({ id }: Place): Appointment[] | undefined {
  return appointments.value?.filter(appointment => appointment.place.id === id)
}
</script>

<template>
  <section class="px-10">
    <el-tabs v-if="places?.length" v-model="activePlace" class="demo-tabs">
      <el-tab-pane label="Mój kalendarz" name="my-calendar">
        <ShowAppointments
          v-if="activePlace === 'my-calendar'"
          :appointments="appointments!"
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
          :appointments="getAppointments(place)!"
        />
      </el-tab-pane>
    </el-tabs>
  </section>
</template>
