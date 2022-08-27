<script lang="ts" setup>
import { computed } from 'vue'
import pick from 'lodash.pick'
import useAppointments from '@/stores/appointments'
import { DataStore } from '@aws-amplify/datastore'
import { Place } from '@/models'

import EditableList, { type Item } from '../../components/EditableList.vue'

const appointments = useAppointments()

const places = computed(() => {
  return appointments.places.map(place => pick(place, ['id', 'name'])) as Item[]
})

function addPlace(name: string) {
  DataStore.save(new Place({ name }))
}

async function deletePlace(id: string) {
  const place = await DataStore.query(Place, id)

  if (place) await DataStore.delete(place)
}

async function updatePlace(id: string, newPlaceName: string) {
  const original = await DataStore.query(Place, id)

  await DataStore.save(
    Place.copyOf(original!, updated => {
      updated.name = newPlaceName
    })
  )
}
</script>

<template>
  <EditableList
    :items="places"
    @add="addPlace"
    @update="updatePlace"
    @delete="deletePlace"
  />
</template>
