<script setup lang="ts">
import ChevronLeft from '~icons/mdi/ChevronLeft'
import ChevronRight from '~icons/mdi/ChevronRight'

const emit = defineEmits(['prev', 'next'])
</script>

<template>
  <div
    class="flex justify-center items-center text-[22px] text-[rgba(0,0,0,.54)] font-normal"
  >
    <ChevronLeft @click="emit('prev')" class="arrow" text="25px" />

    <span px="4">19 Jun - 25 Jun</span>

    <ChevronRight @click="emit('next')" class="arrow" text="25px" />
  </div>
</template>

<style scoped lang="scss">
.arrow {
  @apply cursor-pointer transition hover:text-primary;
}
</style>
