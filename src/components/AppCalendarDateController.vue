<script setup lang="ts">
import { computed, ref } from 'vue'
import dayjs, { type Dayjs } from 'dayjs'
import ChevronLeft from '~icons/mdi/ChevronLeft'
import ChevronRight from '~icons/mdi/ChevronRight'
import { CalendarView } from 'vue3-single-date-picker'
import { i18nFormat } from '@/common'
import { useStorage } from '@vueuse/core'

// eslint-disable-next-line sonarjs/no-duplicate-string
const emit = defineEmits(['prev', 'next', 'update:modelValue'])
const props = withDefaults(
  defineProps<{
    modelValue: Dayjs
    daysInWeek: number
    now?: Dayjs
    blockGoingToPast?: boolean
  }>(),
  {
    now: () => dayjs(),
    blockGoingToPast: false,
  }
)

const usedDatePicker = useStorage('usedDatePicker', false)

const weekBeg = computed(() => props.modelValue.weekday(0))

enum ChangeDirection {
  Prev = -1,
  Next = 1,
}

const isCurrentWeek = computed(
  () => props.blockGoingToPast && props.modelValue.isSame(props.now, 'day')
)

function change(dir: ChangeDirection) {
  if (dir === ChangeDirection.Prev && isCurrentWeek.value) {
    return
  }

  emit(dir === ChangeDirection.Prev ? 'prev' : 'next')

  emit('update:modelValue', props.modelValue.add(dir * props.daysInWeek, 'day'))
}

function format(day: Dayjs): string {
  const formattedStr = i18nFormat(day, 'DD MMM')

  const monthFirstLetter = formattedStr[3].toLocaleUpperCase()

  return [
    formattedStr.slice(0, 3),
    monthFirstLetter,
    formattedStr.slice(4),
  ].join('')
}
const pickDateModalOpened = ref(false)

function pickDate() {
  usedDatePicker.value = true
  pickDateModalOpened.value = true
}

interface SingleDatePickerDateFormat {
  year: number
  month: number
  date: number
}

function changeDateViaPicker(data: SingleDatePickerDateFormat) {
  // eslint-disable-next-line prefer-const
  let { year, month, date } = data
  month++

  emit('update:modelValue', dayjs(`${year}-${month}-${date}`))
  pickDateModalOpened.value = false
}
</script>

<template>
  <div
    class="flex justify-center items-center text-[20px] sm:text-[22px] text-[rgba(0,0,0,.54)] dark:text-light-600 font-normal select-none"
  >
    <ChevronLeft
      @click="change(ChangeDirection.Prev)"
      class="arrow"
      :class="{ disabled: isCurrentWeek }"
      text="25px"
    />

    <span v-if="daysInWeek > 1" px="4">
      {{ format(weekBeg) }}
      -
      {{ format(weekBeg.add(6, 'days')) }}
    </span>
    <span
      v-else
      @click="pickDate"
      :class="{ 'box-animated-border': !usedDatePicker }"
    >
      {{ format(modelValue) }}
    </span>

    <ChevronRight
      @click="change(ChangeDirection.Next)"
      class="arrow"
      text="25px"
    />
  </div>
  <el-dialog width="100%" class="center" v-model="pickDateModalOpened">
    <CalendarView @select-date="changeDateViaPicker" />
  </el-dialog>
</template>

<style scoped lang="scss">
.arrow:not(.disabled) {
  @apply cursor-pointer transition hover:text-primary;
}
</style>
