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

function change(dir: 'prev' | 'next') {
  emit(dir)
  emit('update:modelValue')
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
    class="flex justify-center items-center text-[22px] text-[rgba(0,0,0,.54)] font-normal"
  >
    <ChevronLeft @click="change('prev')" class="arrow" text="25px" />

    <span px="4">
      {{ format(weekBeg) }}
      -
      {{ format(weekBeg.add(6, 'days')) }}
    </span>

    <ChevronRight @click="change('next')" class="arrow" text="25px" />
  </div>
</template>

<style scoped lang="scss">
.arrow {
  @apply cursor-pointer transition hover:text-primary;
}
</style>
