<script lang="ts" setup>
import { computed, onMounted, ref, watchEffect } from 'vue'
import { useI18n } from 'vue-i18n'
import type { Dayjs } from 'dayjs'
import type { Appointment, PendingAppointment, Place } from '@/models'
import useAppointments from '@/stores/appointments'
import { makeCalEvents, Swal } from '@/common'

const activePlace = ref('my-calendar')
const appointments = useAppointments()

const { t } = useI18n()

onMounted(() => {
  appointments.init()
})

watchEffect(() => {
  if (appointments.places.length)
    activePlace.value = appointments.places[0].name
})

const events = computed(() => {
  const place = appointments.places.find(
    ({ name }) => name === activePlace.value
  )

  if (!place) return []

  return makeCalEvents({
    appointments: getAppointments(place),
    pendingAppointments: getPendings(place),
  })
})

function getAppointments({ id }: Place): Appointment[] {
  return appointments.appointments?.filter(({ place }) => place.id === id)
}

function getPendings({ id }: Place): PendingAppointment[] {
  return appointments.pendingAppointments?.filter(
    ({ place }) => place.id === id
  )
}

async function onEventClick(place: Place, date: Dayjs) {
  const unapprovedUsers = appointments.pendingAppointments.filter(app => {
    return app.place.id === place.id && date.isSame(app.datetime)
  })

  if (!unapprovedUsers.length) {
    return
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
      unapprovedUsers.map(req => [req.id, req.owner])
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
  <section class="px-10">
    <el-tabs v-if="appointments.places?.length" v-model="activePlace">
      <el-tab-pane
        v-for="place in appointments.places"
        :key="place.id"
        :label="place.name"
        :name="place.name"
      >
        <div class="flex justify-center">
          <AppCalendar
            v-if="activePlace === place.name"
            @onEventClick="onEventClick(place, $event)"
            :events="events"
          />
        </div>
      </el-tab-pane>
    </el-tabs>
  </section>
</template>
