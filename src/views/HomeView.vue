<script lang="ts" setup>
import { onMounted, ref } from 'vue'
import type { Appointment, Place } from '@/models'
import useAppointments from '@/stores/appointments'

const appointments = useAppointments()

const activePlace = ref('my-calendar')

onMounted(() => {
  appointments.init()
})

function getAppointments({ id }: Place): Appointment[] {
  return appointments.appointments?.filter(({ place }) => place.id === id)
}
</script>

<template>
  <section class="px-10">
    <el-tabs
      v-if="appointments.places?.length"
      v-model="activePlace"
      class="demo-tabs"
    >
      <el-tab-pane :label="$t('myCalendar')" name="my-calendar">
        <ShowAppointments
          v-if="activePlace === 'my-calendar'"
          :appointments="appointments.appointments"
        />
      </el-tab-pane>

      <el-tab-pane
        v-for="place in appointments.places"
        :key="place.id"
        :label="place.name"
        :name="place.name"
      >
        <ShowAppointments
          v-if="activePlace === place.name"
          :appointments="getAppointments(place)"
          :place="place"
        />
      </el-tab-pane>
    </el-tabs>
  </section>
</template>
