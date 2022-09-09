<script setup lang="ts">
import { computed, onMounted, ref } from 'vue'
import inRange from 'lodash.inrange'
import dayjs, { type Dayjs } from 'dayjs'

const props = withDefaults(
  defineProps<{
    now?: Dayjs
    startHour: number
    endHour: number
    reactive?: boolean
    calculateDay?: boolean
  }>(),
  {
    now: () => dayjs(),
    reactive: true,
    calculateDay: true,
  }
)

const currTime = ref<Dayjs>(props.now)
const day = computed(() => (props.calculateDay ? currTime.value.weekday() : 0))
const hourCol = computed(() => currTime.value.hour() - props.startHour + 2)
const hourPercent = computed(() => currTime.value.minute() / 60)

onMounted(() => {
  if (props.reactive) {
    setInterval(() => {
      currTime.value = currTime.value.add(5, 'minute')
    }, 1000 * 60 * 5)
  }
})
</script>

<template>
  <div class="current-time" v-if="inRange(now.hour(), startHour, endHour)">
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
  top: calc((v-bind(hourPercent) * 100%) - 1px);
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
