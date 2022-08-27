<script lang="ts" setup>
import { onMounted } from 'vue'
import useAppointments from '@/stores/appointments'
import { Routes } from '@/router'

const appointments = useAppointments()

onMounted(() => {
  appointments.init()
})
</script>

<template>
  <router-link :to="{ name: Routes.AdminAppointments }">
    Appointments
  </router-link>

  <router-link :to="{ name: Routes.AdminPlaces }">Places</router-link>

  <router-view />ck going to the past for the admins)
</template>
