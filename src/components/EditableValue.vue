<script lang="ts" setup>
import { onClickOutside, onKeyDown } from '@vueuse/core'
import { ref, watch } from 'vue'

const props = defineProps<{
  value: string
}>()

defineEmits<{
  update: (newVal: string) => void
}>()

const wrapper = ref(null)
const editMode = ref(false)

const newValue = ref(props.value)

watch(
  () => props.value,
  () => {
    newValue.value = props.value
  }
)

onKeyDown('Escape', () => {
  editMode.value = false
})

onClickOutside(wrapper, () => {
  editMode.value = false
})
</script>

<template>
  <div ref="wrapper">
    <div v-if="!editMode" @dblclick="editMode = true">
      {{ value }}
    </div>
    <el-input v-else v-model="newValue" />
  </div>
</template>
