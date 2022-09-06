<script setup lang="ts">
import { ref, computed } from 'vue'
import type { Dayjs } from 'dayjs'
import { useMediaQuery } from '@vueuse/core'
import { range } from '@/utils'
import type { CalendarEvent } from '@/common'
import currentPeriod from '@/composables/currentPeriod'

import AppCalendarDays from './AppCalendarDays.vue'
import AppCalendarDateController from './AppCalendarDateController.vue'
import AppCalendarEvent from './AppCalendarEvent.vue'
import AppCalendarCurrentTime from './AppCalendarCurrentTime.vue'

defineEmits<{
  onDateChange(date: Dayjs): void
  onEventClick(date: Dayjs): void
  onEventRemove(id: string): void
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
  blockGoingToPast: {
    type: Boolean,
    default: true,
  },
  eventsRemovable: {
    type: Boolean,
    default: false,
  },
})

const hoursRange = computed(() => {
  const [beg, end] = props.hours

  return range(beg, end + 1)
})

const hoursRangeLength = computed(() => hoursRange.value.length)
const isCurrentPeriodDisplayed = ref(true)

enum CalendarDisplay {
  Day = 1,
  Week = 7,
}

const isLargeScreen = useMediaQuery('(min-width: 1280px)')

const displayMode = computed(() =>
  isLargeScreen.value ? CalendarDisplay.Week : CalendarDisplay.Day
)

const currentPeriodEvents = computed(() => {
  return props.events.filter(event =>
    event.datetime.isSame(
      currentPeriod.value,
      displayMode.value === CalendarDisplay.Day ? 'day' : 'week'
    )
  )
})

const eventMatrix = computed(() => {
  const {
    hours: [start, stop],
  } = props

  return range(0, displayMode.value - 1)
    .map(x => range(0, stop - start - 1).map((_, y) => [x, y]))
    .flat()
})

function makeDate(day: number, hour: number) {
  const normalizedDate = currentPeriod.value
    .hour(hour + props.hours[0])
    .minute(0)
    .second(0)
    .millisecond(0)

  return displayMode.value === CalendarDisplay.Week
    ? normalizedDate.weekday(day)
    : normalizedDate
}
</script>

<template>
  <div class="container">
    <AppCalendarDateController
      :days-in-week="displayMode"
      v-model="currentPeriod"
      :block-going-to-past="blockGoingToPast"
    />
    <AppCalendarDays
      :current-week="currentPeriod"
      @update-is-the-same-week="isCurrentPeriodDisplayed = $event"
      :days-in-week="displayMode"
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
        v-for="n in range(1, displayMode)"
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
        v-for="event in currentPeriodEvents"
        :key="event.id"
        :day="
          displayMode === CalendarDisplay.Day ? 1 : event.datetime.weekday() + 1
        "
        :start-hour="event.datetime.hour() - hours[0] + 2"
        :content="event.content"
        :title="event.title"
        :pending="event.pending"
        :delete-event-enabled="eventsRemovable && event.pending"
        @remove="$emit('onEventRemove', event.id)"
      />

      <AppCalendarCurrentTime
        v-if="isCurrentPeriodDisplayed"
        :start-hour="hours[0]"
        :end-hour="hours[1]"
        :calculate-day="displayMode === CalendarDisplay.Week"
      />
    </div>
  </div>
</template>

<style scoped lang="scss">
@import '../assets/app-calendar.scss';

.container {
  font-family: 'Google Sans', 'Segoe UI', Arial, sans-serif;
  --days-in-week: v-bind(displayMode);

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
