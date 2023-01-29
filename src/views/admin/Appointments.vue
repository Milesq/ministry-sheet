<script lang="ts" setup>
import { ref, watchEffect } from 'vue'
import { computedAsync } from '@vueuse/core'
import { useI18n } from 'vue-i18n'
import type { Dayjs } from 'dayjs'
import type { Appointment, PendingAppointment, Place } from '@/models'
import useAppointments from '@/stores/appointments'
import { makeCalEvents, Swal } from '@/common'

const activePlace = ref('my-calendar')
const appointments = useAppointments()

const { t } = useI18n()

watchEffect(() => {
  if (appointments.places.length)
    activePlace.value = appointments.places[0].name
})

const events = computedAsync(() => {
  const place = appointments.places.find(
    ({ name }) => name === activePlace.value
  )

  if (!place) return []

  return makeCalEvents({
    appointments: getAppointments(place.id),
    pendingAppointments: getPendings(place.id),
    place: place as unknown as Place,
  })
})

function getAppointments(id: string): Appointment[] {
  return appointments.appointments?.filter(({ placeID }) => placeID === id)
}

function getPendings(id: string): PendingAppointment[] {
  return appointments.pendingAppointments?.filter(
    ({ placeID }) => placeID === id
  )
}

async function deleteApprovedAppointment(place: Place, date: Dayjs) {
  const isoDate = date.toISOString()

  const app = appointments.appointments.find(
    a => a.placeID === place.id && a.datetime === isoDate
  )

  if (!app) return

  const { isDenied, value: userToRemove } = await Swal.fire({
    title: t('selectUser'),
    input: 'select',
    inputOptions: Object.fromEntries(app.users!.map(x => [x, x])),
    showCancelButton: true,
    reverseButtons: true,
    showConfirmButton: false,
    showDenyButton: true,
    returnInputValueOnDeny: true,
    cancelButtonText: t('cancel'),
    denyButtonText: t('deny'),
  })

  if (isDenied) {
    appointments.remove(app.id, userToRemove)
  }
}

async function onEventClick(place: Place, date: Dayjs) {
  const unapprovedUsers = appointments.pendingAppointments.filter(app => {
    return app.placeID === place.id && date.isSame(app.datetime)
  })

  if (!unapprovedUsers.length) {
    return deleteApprovedAppointment(place, date)
  }

  const {
    isConfirmed,
    isDenied,
    isDismissed,
    value: pendingID,
  } = await Swal.fire({
    title: t('selectUser'),
    input: 'select',
    inputOptions: Object.fromEntries(
      unapprovedUsers.map(req => [req.id, req.ownerName])
    ),
    inputPlaceholder: '-',
    showDenyButton: true,
    showCancelButton: true,
    reverseButtons: true,
    returnInputValueOnDeny: true,
    confirmButtonText: t('confirm[2]'),
    cancelButtonText: t('cancel'),
    denyButtonText: t('deny'),
  })

  if (!isDismissed && !pendingID) {
    return Swal.fire(
      t('error.selectUser.title'),
      t('error.selectUser.text'),
      'warning'
    )
  }

  if (isConfirmed) {
    appointments.confirm(pendingID)
  } else if (isDenied) {
    appointments.deny(pendingID)
  }
}
</script>

<template>
  <section class="sm:px-10 view-wrapper">
    <el-tabs v-if="appointments.places?.length" v-model="activePlace">
      <el-tab-pane
        v-for="place in appointments.places"
        :key="place.id"
        :name="place.name"
        class="asd"
      >
        <template #label>
          <el-badge :value="appointments.byPlaces[place.name]?.length">
            {{ place.name }}
          </el-badge>
        </template>
        <div class="flex justify-center">
          <AppCalendar
            v-if="activePlace === place.name"
            @event-click="onEventClick(place as unknown as Place, $event)"
            :events="events"
            :blockGoingToPast="false"
          />
        </div>
      </el-tab-pane>
    </el-tabs>
  </section>
</template>

<style lang="scss">
.view-wrapper {
  .el-badge__content--danger {
    --el-color-danger: var(--color-primary);
  }

  .el-tabs__item {
    margin-top: 8px;
  }
}
</style>
