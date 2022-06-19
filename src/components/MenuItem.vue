<script setup lang="ts">
import type { Component } from 'vue'

defineProps({
  icon: {
    type: Object as () => Component,
    required: true,
  },
  tooltip: {
    type: String,
    required: true,
  },
})
</script>

<template>
  <el-tooltip
    class="box-item"
    effect="dark"
    :content="tooltip"
    placement="bottom"
  >
    <span
      v-bind="$attrs"
      mx="2"
      class="circle-btn flex justify-center items-center"
    >
      <component :is="icon" height="24" color="white" />
    </span>
  </el-tooltip>
</template>
