<script setup lang="ts">
defineProps<{
  msg: string
}>()
</script>

<template>
  <div>Hello, {{ msg }}</div>
</template>
