<script setup lang="ts">
import dayjs from 'dayjs'
import { computed } from 'vue'

const WEEK = 7 // days

const props = withDefaults(
  defineProps<{
    today?: Date
  }>(),
  {
    today: () => new Date(),
  }
)

const monday = computed(() => dayjs(props.today).weekday(0))
const weekDay = computed(() => dayjs(props.today).weekday())
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
        {{ monday.add(n - 1, 'day').format('ddd') }}
      </div>

      <div class="pt-4">
        <span :class="{ active: weekDay === n }">
          {{ monday.add(n - 1, 'day').date() }}
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
