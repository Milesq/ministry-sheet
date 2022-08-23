<script setup lang="ts">
import { computed } from 'vue'

const props = withDefaults(
  defineProps<{
    day: number
    startHour: number
    content: string[]
    length?: number
    title?: string
    pending?: boolean
  }>(),
  {
    length: 1,
  }
)

const bg = computed(() => {
  const { pending, content } = props

  if (pending) {
    return 'bg-gray-400'
  }

  if (content.length === 1) {
    return 'bg-yellow-400'
  }

  return 'bg-primary'
})
</script>

<template>
  <div class="event" :class="bg">
    <span v-if="title" class="additional-info">
      {{ title }}
    </span>
    <div v-for="row in content" :key="row" v-html="row"></div>
  </div>
</template>

<style scoped lang="scss">
.event {
  position: relative;
  .additional-info {
    position: absolute;
    left: 5px;
    top: 0;
  }

  @apply flex flex-col justify-around items-center;
  border-radius: 5px;
  padding: 5px;

  margin-top: 5px;
  margin-bottom: 5.5px;
  margin-right: 10px;
  margin-left: 10px;

  box-shadow: 2px 2px 5px S1px rgba(0, 0, 0, 0.2);

  font-weight: bold;
  font-size: 80%;
  color: white;

  grid-column: calc(v-bind(day) + 2);
  grid-row: v-bind(startHour) / span v-bind(length);
}
</style>
