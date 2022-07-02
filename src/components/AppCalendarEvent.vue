<script setup lang="ts">
withDefaults(
  defineProps<{
    day: number
    startHour: number
    content: string
    length?: number
  }>(),
  {
    length: 1,
  }
)
</script>

<template>
  <div class="event">
    {{ content }}
  </div>
</template>

<style scoped>
.event {
  @apply bg-primary;
  border-radius: 5px;
  padding: 5px;
  margin-bottom: 0.5px;
  margin-right: 10px;
  font-weight: bold;
  font-size: 80%;
  color: white;

  grid-column: calc(v-bind(day) + 2);
  grid-row: v-bind(startHour) / span v-bind(length);
}
</style>
