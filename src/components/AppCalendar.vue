<script setup lang="ts">
import { ref, computed } from 'vue'
import dayjs from 'dayjs'
import { range } from '@/utils'
import type { CalendarEvent } from '@/common'

import AppCalendarDays from './AppCalendarDays.vue'
import AppCalendarDateController from './AppCalendarDateController.vue'
import AppCalendarEvent from './AppCalendarEvent.vue'
import AppCalendarCurrentTime from './AppCalendarCurrentTime.vue'

defineEmits<{
  onDateChange(date: dayjs.Dayjs): void
  onEventClick(date: dayjs.Dayjs): void
}>()

const props = defineProps({
  hours: {
    type: Array as () => number[],
    default: () => [8, 18],
    validator: (value: number[]) => value.length === 2,
  },
  events: {
    type: Array as () => CalendarEvent[],
    default: () => [],
  },
  addEvents: {
    type: Boolean,
    default: true,
  },
})

const hoursRange = computed(() => {
  const [beg, end] = props.hours

  return range(beg, end + 1)
})

const hoursRangeLength = computed(() => hoursRange.value.length)
const currentWeek = ref(dayjs())
const isCurrentWeekDisplayed = ref(true)

const currentWeekEvents = computed(() => {
  const week = currentWeek.value
  const events = props.events

  return events.filter(event => event.datetime.isSame(week, 'week'))
})

const daysInWeek = ref(7)

const eventMatrix = computed(() => {
  const {
    hours: [start, stop],
  } = props

  return range(0, daysInWeek.value - 1)
    .map(x => range(0, stop - start - 1).map((_, y) => [x, y]))
    .flat()
})

function makeDate(day: number, hour: number) {
  return currentWeek.value
    .weekday(day)
    .hour(hour + props.hours[0])
    .minute(0)
    .second(0)
    .millisecond(0)
}
</script>

<template>
  <div class="container">
    <AppCalendarDateController
      v-model="currentWeek"
      :block-going-to-past="true"
    />
    <AppCalendarDays
      :current-week="currentWeek"
      @update-is-the-same-week="isCurrentWeekDisplayed = $event"
    />

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
        v-for="n in range(1, daysInWeek)"
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

      <div
        v-for="[x, y] in eventMatrix"
        :key="x + '-' + y"
        @click="$emit('onEventClick', makeDate(x, y))"
        class="z-99"
        :class="{ 'cursor-pointer': props.addEvents }"
        :style="{ gridRow: y + 2, gridColumn: x + 3 }"
      ></div>

      <AppCalendarEvent
        v-for="event in currentWeekEvents"
        :key="event.id"
        :day="event.datetime.weekday() + 1"
        :start-hour="event.datetime.hour() - hours[0] + 2"
        :content="event.content"
        :title="event.title"
        :pending="event.pending"
      />

      <AppCalendarCurrentTime
        v-if="isCurrentWeekDisplayed"
        :start-hour="hours[0]"
        :end-hour="hours[1]"
      />
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
  padding-right: 2px;

  @apply text-[#70757a] dark:text-light-600;
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
