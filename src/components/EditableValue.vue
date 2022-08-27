<script lang="ts" setup>
import { ref, watch } from 'vue'
import { onClickOutside } from '@vueuse/core'
import { vOnKeyStroke } from '@vueuse/components'

const props = defineProps<{
  value: string
}>()

const emit = defineEmits(['update'])

const wrapper = ref(null)
const editMode = ref(false)

const newValue = ref(props.value)

watch(
  () => props.value,
  () => {
    newValue.value = props.value
  }
)

function disableEditMode() {
  editMode.value = false
}

onClickOutside(wrapper, disableEditMode)

function update() {
  emit('update', newValue.value)
  disableEditMode()
}
</script>

<template>
  <div ref="wrapper">
    <div v-if="!editMode" @dblclick="editMode = true">
      {{ value }}
    </div>
    <el-input
      v-else
      v-model="newValue"
      v-on-key-stroke:Enter="[update, { eventName: 'keydown' }]"
      v-on-key-stroke:Escape="[disableEditMode, { eventName: 'keydown' }]"
    />
  </div>
</template>
