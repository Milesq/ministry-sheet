<template>
  <section class="px-10">
    <el-tabs v-if="places?.length" v-model="activePlace" class="demo-tabs">
      <el-tab-pane label="Mój kalendarz" name="my-calendar"></el-tab-pane>
      <el-tab-pane
        v-for="place in places"
        :key="place.id"
        :label="place.name"
        :name="place.name"
      >
        {{ place.name }}
      </el-tab-pane>
    </el-tabs>
  </section>
</template>

<script lang="ts" setup>
import { onMounted, ref } from 'vue'
import { DataStore } from '@aws-amplify/datastore'
import { Place } from '@/models'

const places = ref<Place[]>()

const activePlace = ref('my-calendar')

onMounted(async () => {
  places.value = await DataStore.query(Place)
})
</script>
