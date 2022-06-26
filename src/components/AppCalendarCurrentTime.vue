<script setup lang="ts">
import { computed } from 'vue'
import dayjs, { type Dayjs } from 'dayjs'

const props = withDefaults(
  defineProps<{
    now?: Dayjs
    startHour: number
  }>(),
  {
    now: () => dayjs(),
  }
)

const day = computed(() => props.now.weekday())
const hourCol = computed(() => props.now.hour() - props.startHour + 1)
</script>

<template>
  <div class="current-time">
    <div class="circle"></div>
  </div>
</template>

<style scoped lang="scss">
@import '../assets/app-calendar.scss';

.current-time {
  grid-column: calc(
    v-bind(day) + 2 + 1
  ); // 2 is a offset of the grid, 1 is because monday is 0 not 1
  grid-row: v-bind(hourCol);

  border-top: 2px solid $current-time-color;
  position: relative;
  top: calc(50% - 1px);
}

.circle {
  width: 12px;
  height: 12px;
  border: 1px solid $current-time-color;
  border-radius: 50%;
  background: $current-time-color;
  position: relative;
  top: -6px;
  left: -6px;
}
</style>
