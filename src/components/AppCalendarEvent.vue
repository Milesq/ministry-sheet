<script setup lang="ts">
import { computed } from 'vue'
import DeleteIcon from '~icons/mdi/delete'

const props = withDefaults(
  defineProps<{
    day: number
    startHour: number
    content: string[]
    length?: number
    title?: string
    pending?: boolean
    deleteEventEnabled: boolean
  }>(),
  {
    length: 1,
    deleteEventEnabled: false,
  }
)

defineEmits(['remove'])

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
  <div
    class="event"
    :class="[bg, { 'z-1000 cursor-pointer': deleteEventEnabled }]"
    @click="$emit('remove')"
  >
    <span v-if="title" class="additional-info">
      {{ title }}
    </span>
    <div v-for="row in content" :key="row" v-html="row"></div>

    <div v-if="deleteEventEnabled" class="remove-icon">
      <DeleteIcon />
    </div>
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

.remove-icon {
  --size: 30px;

  @apply bg-red-500 rounded-full p-2 center cursor-pointer z-1000;
  position: absolute;
  height: var(--size);
  width: var(--size);
  right: calc(var(--size) * -0.3);
  top: calc(var(--size) * -0.3);
}
</style>
