<script lang="ts" setup>
import { computed, onMounted, ref } from 'vue'
import type { Appointment, PendingAppointment, Place } from '@/models'
import useAppointments from '@/stores/appointments'
import useUser from '@/stores/user'

const appointments = useAppointments()
const { name: username } = useUser()

const activePlace = ref('my-calendar')

onMounted(() => {
  appointments.init()
})

function getAppointments({ id }: Place): Appointment[] {
  return appointments.appointments?.filter(({ place }) => place.id === id)
}

function getPendings({ id }: Place): PendingAppointment[] {
  return appointments.myPendings?.filter(({ place }) => place.id === id)
}

const myAppointments = computed(() => {
  return appointments.appointments.filter(({ users }) => {
    return users?.includes(username)
  })
})
</script>

<template>
  <section class="px-10">
    <el-tabs v-if="appointments.places?.length" v-model="activePlace">
      <el-tab-pane :label="$t('myCalendar')" name="my-calendar">
        <ShowAppointments
          v-if="activePlace === 'my-calendar'"
          :appointments="myAppointments"
          :pending-appointments="appointments.myPendings"
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
          :pending-appointments="getPendings(place)"
          :place="place"
        />
      </el-tab-pane>
    </el-tabs>
    <h1 v-else v-t="'error.missingContent'"></h1>
  </section>
</template>
