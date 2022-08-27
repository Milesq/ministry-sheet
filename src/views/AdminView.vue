<script lang="ts" setup>
import { onMounted } from 'vue'
import useAppointments from '@/stores/appointments'

const appointments = useAppointments()

onMounted(() => {
  appointments.init()
})
</script>

<template>
  <AdminAppointments />
</template>
