<script setup lang="ts">
import { computed } from 'vue'
import type { Dayjs } from 'dayjs'
import ChevronLeft from '~icons/mdi/ChevronLeft'
import ChevronRight from '~icons/mdi/ChevronRight'

const emit = defineEmits(['prev', 'next', 'update:modelValue'])
const props = defineProps<{
  modelValue: Dayjs
}>()

const weekBeg = computed(() => props.modelValue.weekday(0))

enum ChangeDirection {
  Prev = -1,
  Next = 1,
}

function change(dir: ChangeDirection) {
  emit(dir === ChangeDirection.Prev ? 'prev' : 'next')

  emit('update:modelValue', props.modelValue.add(dir, 'week'))
}

function format(day: Dayjs): string {
  const formattedStr = day.format('DD MMM')

  const monthFirstLetter = formattedStr[3].toLocaleUpperCase()

  return [
    formattedStr.slice(0, 3),
    monthFirstLetter,
    formattedStr.slice(4),
  ].join('')
}
</script>

<template>
  <div
    class="flex justify-center items-center text-[22px] text-[rgba(0,0,0,.54)] dark:text-light-600 font-normal"
  >
    <ChevronLeft
      @click="change(ChangeDirection.Prev)"
      class="arrow"
      text="25px"
    />

    <span px="4">
      {{ format(weekBeg) }}
      -
      {{ format(weekBeg.add(6, 'days')) }}
    </span>

    <ChevronRight
      @click="change(ChangeDirection.Next)"
      class="arrow"
      text="25px"
    />
  </div>
</template>

<style scoped lang="scss">
.arrow {
  @apply cursor-pointer transition hover:text-primary;
}
</style>
