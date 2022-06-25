<script setup lang="ts">
import { computed } from 'vue'
import { range } from '@/utils'

import VCalendarDays from './AppCalendarDays.vue'
import VCalendarDateController from './AppCalendarDateController.vue'
import AppCalendarEvent from './AppCalendarEvent.vue'
import AppCalendarCurrentTime from './AppCalendarCurrentTime.vue'

const props = defineProps({
  hours: {
    type: Array as () => number[],
    default: () => [8, 18],
    validator: (value: number[]) => value.length === 2,
  },
})

const hoursRange = computed(() => {
  const [beg, end] = props.hours

  return range(beg, end)
})

const hoursRangeLength = computed(() => hoursRange.value.length)
</script>

<template>
  <div class="container">
    <VCalendarDateController />
    <VCalendarDays />

    <div class="content">
      <div
        v-for="(n, index) in hoursRange"
        :key="n"
        class="hour"
        :style="{
          gridRow: index + 1,
        }"
      >
        {{ n.toString().padStart(2, '0') }}:00
      </div>

      <div class="filler-col"></div>

      <div
        v-for="n in range(1, 7)"
        :key="n"
        class="col"
        :style="{ gridColumn: n + 2 }"
      ></div>

      <div
        v-for="(_, n) in hoursRange"
        :key="n"
        class="row"
        :style="{ gridRow: n + 1 }"
      ></div>

      <AppCalendarEvent :day="1" :start-hour="2" />

      <AppCalendarCurrentTime />
    </div>
  </div>
</template>

<style scoped lang="scss">
@import '../assets/app-calendar.scss';

.container {
  font-family: 'Google Sans', 'Segoe UI', Arial, sans-serif;

  width: 100%;
  display: grid;
  grid-template-rows: $title-height $days-height auto;
  position: absolute;
}

.content {
  display: grid;
  grid-template-columns: $calendar-template;
  grid-template-rows: repeat(v-bind(hoursRangeLength), $time-height);
}

.hour {
  grid-column: 1;
  text-align: right;
  align-self: end;
  font-size: 80%;
  position: relative;
  bottom: -1ex;
  color: #70757a;
  padding-right: 2px;
}

.col {
  border-right: 1px solid $grid-color;
  grid-row: 1 / -1;
  grid-column: span 1;
}

.filler-col {
  grid-row: 1 / -1;
  grid-column: 2;
  border-right: 1px solid $grid-color;
}

.row {
  grid-column: 3 / -1;
  border-bottom: 1px solid $grid-color;
}
.col--disabled {
  background-color: #f1f3f4;
}
</style>
