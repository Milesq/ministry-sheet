<script setup lang="ts">
import { computed, watch } from 'vue'
import dayjs, { type Dayjs } from 'dayjs'
import { i18nFormat } from '@/common'

const emit = defineEmits<{
  (e: 'updateIsTheSameWeek', value: boolean): void
}>()
const props = withDefaults(
  defineProps<{
    today?: Dayjs
    currentWeek: Dayjs
    daysInWeek?: number
  }>(),
  {
    today: () => dayjs(),
    daysInWeek: 7,
  }
)

const monday = computed(() => props.currentWeek.weekday(0))

// cannot use isSame(..., 'week') because they starts week at the sunday
const isTheSameWeek = computed(() => {
  if (props.daysInWeek === 1) {
    return props.currentWeek.isSame(props.today, 'day')
  } else {
    return monday.value.isSame(props.today.weekday(0), 'day')
  }
})

watch([isTheSameWeek], () => {
  emit('updateIsTheSameWeek', isTheSameWeek.value)
})

function isToday(dayInWeek: number): boolean {
  return isTheSameWeek.value && props.today.weekday() === dayInWeek
}
</script>

<template>
  <div class="days" :class="{ 'day-mode': daysInWeek === 1 }">
    <!-- fillers for hours & space -->
    <div></div>
    <div></div>

    <span
      v-for="(_, n) in daysInWeek"
      :key="n"
      text="[#757575] [25px] dark:light-600"
      font="medium"
      class="day"
    >
      <div :class="isToday(n) && 'text-primary'" class="text-xs uppercase">
        <span v-if="daysInWeek === 1">
          {{ i18nFormat(currentWeek, 'ddd') }}
        </span>

        <span v-else>
          {{ i18nFormat(monday.add(n, 'day'), 'ddd') }}
        </span>
      </div>

      <div class="pt-2 flex justify-center">
        <span :class="{ 'date-box--active': isToday(n) }" class="date-box">
          <span v-if="daysInWeek !== 1">
            {{ monday.add(n, 'day').date() }}
          </span>
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

  &:not(.day-mode) {
    grid-template-columns: $calendar-template;
    & > .day {
      border-left: 1px solid $grid-color;
    }
  }

  position: sticky;
  top: $title-height;
  border-bottom: 1px solid $grid-color;

  transform: translateX(-1px);
  // other borders are right-only so this is needed to make them in exactly the same line
}

.date-box {
  @apply rounded-full
    p-2
    w-12
    h-12

    center;

  &--active {
    @apply bg-primary
      text-white

      shadow-md
      dark:shadow-none;
  }
}
</style>
