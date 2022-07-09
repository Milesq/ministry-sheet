<script setup lang="ts">
withDefaults(
  defineProps<{
    day: number
    startHour: number
    content: string[]
    length?: number
  }>(),
  {
    length: 1,
  }
)
</script>

<template>
  <div class="event">
    <span class="additional-info">asd</span>
    <div v-for="row in content" :key="row">
      {{ row }}
    </div>
  </div>
</template>

<style scoped lang="scss">
.event {
  .additional-info {
    position: absolute;
    left: 0;
  }

  @apply bg-primary flex flex-col justify-around items-center;
  border-radius: 5px;
  padding: 5px;

  margin-top: 5px;
  margin-bottom: 5.5px;
  margin-right: 10px;
  margin-left: 10px;

  box-shadow: 2px 2px 5px S1px rgba(0, 0, 0, 0.2);

  font-weight: bold;
  font-size: 80%;
  color: white;

  grid-column: calc(v-bind(day) + 2);
  grid-row: v-bind(startHour) / span v-bind(length);
}
</style>
