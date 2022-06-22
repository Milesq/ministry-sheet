<script setup lang="ts">
import type { Appointment } from '@/models'
import { onMounted } from 'vue'

const props = defineProps<{
  appointments: Appointment[]
}>()

onMounted(() => {
  console.log(props.appointments)
})
</script>

<template>
  <div>ok</div>
</template>
