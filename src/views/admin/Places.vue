<script lang="ts" setup>
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'
import pick from 'lodash.pick'
import useAppointments from '@/stores/appointments'
import { DataStore } from '@aws-amplify/datastore'
import { Place } from '@/models'
import { Swal } from '@/common'

import EditableList, { type Item } from '../../components/EditableList.vue'

const appointments = useAppointments()
const { t } = useI18n()

const places = computed(() => {
  return appointments.places.map(place => pick(place, ['id', 'name'])) as Item[]
})

function checkPlaceName(name: string) {
  if (name.length < 3) {
    Swal.fire(t('error.err'), t('error.placeNameTooShort', [3]), 'error')

    throw new Error('Place name must be at least 3 characters long')
  }
}

function addPlace(name: string) {
  checkPlaceName(name)
  DataStore.save(new Place({ name }))
}

async function deletePlace(id: string) {
  const place = await DataStore.query(Place, id)

  if (place) await DataStore.delete(place)
}

async function updatePlace(id: string, newPlaceName: string) {
  checkPlaceName(newPlaceName)
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
