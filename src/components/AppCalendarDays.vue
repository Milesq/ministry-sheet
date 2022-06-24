<script setup lang="ts">
import { computed } from 'vue'

const WEEK = 7 // days
const DAY = 24 * 3600 * 1000 // ms

const props = withDefaults(
  defineProps<{
    today?: Date
  }>(),
  {
    today: () => new Date(),
  }
)

const weekDay = computed(() => props.today.getDay() || 7) // 7 for sunday which is 0 by default

function day(offset: number): { name: string; num: number } {
  const date = new Date(props.today.getTime() + DAY * offset)

  const num = date.getUTCDate()
  let name = date.toLocaleDateString('pl-PL', { weekday: 'short' })

  if (name.endsWith('.')) {
    name = name.slice(0, -1)
  }

  return { name, num }
}
</script>

<template>
  <div class="days">
    <!-- fillers for hours & space -->
    <div></div>
    <div></div>

    <span
      v-for="n in WEEK"
      :key="n"
      text="[#757575] [25px] dark:light-600"
      font="medium"
      class="day"
    >
      <div :class="weekDay === n && 'text-primary'" class="text-xs uppercase">
        {{ day(n - weekDay).name }}
      </div>

      <div class="pt-4">
        <span :class="{ active: weekDay === n }">
          {{ day(n - weekDay).num }}
        </span>
      </div>
    </span>
  </div>
</template>

<style scoped lang="scss">
@import '../assets/app-calendar.scss';

.days {
  display: grid;
  place-content: center;
  text-align: center;
  grid-template-columns: $calendar-template;
  position: sticky;
  top: $title-height;
  border-bottom: 1px solid $grid-color;

  transform: translateX(-1px);
  // other borders are right-only so this is needed to make them in exactly the same line
}

.day {
  border-left: 1px solid $grid-color;
}

.active {
  @apply bg-primary
    rounded-full
    p-2

    text-white

    shadow-md
    dark:shadow-none;
}
</style>
