<script setup lang="ts">
withDefaults(
  defineProps<{
    day: number
    startHour: number
    length?: number
  }>(),
  {
    length: 1,
  }
)
</script>

<template>
  <div class="event calendar1">Event 1</div>
</template>

<style scoped>
.event {
  border-radius: 5px;
  padding: 5px;
  margin-right: 10px;
  font-weight: bold;
  font-size: 80%;

  grid-column: calc(v-bind(day) + 2);
  grid-row: v-bind(startHour) / span v-bind(length);
}
</style>
