<script setup lang="ts">
import { onBeforeMount } from 'vue'
import { useI18n } from 'vue-i18n'
import { useRoute } from 'vue-router'
import { DataStore } from '@aws-amplify/datastore'
import Home from '~icons/mdi/Home'
import LogoutVariant from '~icons/mdi/LogoutVariant'
import Security from '~icons/mdi/Security'
import Brightness from '~icons/mdi/brightness'
import Refresh from '~icons/mdi/refresh'
import WeatherNight from '~icons/mdi/WeatherNight'
import Translate from '~icons/mdi/translate'
import useUser from '@/stores/user'
import useLocale from '@/stores/locale'
import { Routes } from '@/router'

import MenuItem from './components/MenuItem.vue'
import theme from './composables/theme'

const { t, availableLocales } = useI18n()
const locale = useLocale()
const user = useUser()
const route = useRoute()

onBeforeMount(async () => {
  locale.sync()

  if (!(await user.credentialsGuard())) {
    refresh()
  }
})

function refresh() {
  DataStore.clear()
  location.reload()
}

function logout() {
  user.logout()
  DataStore.clear().then(() => {
    location.reload()
  })
}
</script>

<template>
  <div class="common-layout">
    <el-container>
      <el-header
        class="flex justify-between items-center text-[2rem]"
        :class="
          route.name?.toString().startsWith(Routes.Admin)
            ? 'bg-[#5b3c88]'
            : 'bg-primary'
        "
      >
        <div class="md:hidden text-[1rem]">
          <el-button
            round
            color="transparent"
            class="wrapping-btn uppercase !font-semibold"
          >
            {{ t('appName') }}
          </el-button>
        </div>
        <div class="hidden md:flex">
          <router-link to="/">
            <MenuItem :tooltip="$t('homePage')" :icon="Home" />
          </router-link>

          <router-link :to="{ name: Routes.Admin }">
            <MenuItem :tooltip="$t('admin')" :icon="Security" />
          </router-link>
        </div>

        <div flex="1"></div>

        <el-dropdown
          @command="locale.setLocale"
          class="mx-2 circle-btn flex justify-center items-center"
        >
          <span>
            <Translate height="24" color="white" />
          </span>

          <template #dropdown>
            <el-dropdown-menu>
              <el-dropdown-item
                v-for="locale in availableLocales"
                :key="locale"
                :command="locale"
              >
                {{ locale.toLocaleUpperCase() }}
              </el-dropdown-item>
            </el-dropdown-menu>
          </template>
        </el-dropdown>

        <MenuItem
          @click="theme.toggle()"
          :tooltip="$t('changeTheme')"
          :icon="theme.isDark ? WeatherNight : Brightness"
        />
        <MenuItem
          @click="refresh"
          v-if="user.isLoggedIn"
          :tooltip="$t('refresh')"
          :icon="Refresh"
        />
        <MenuItem
          @click="logout"
          v-if="user.isLoggedIn"
          :tooltip="$t('logout')"
          :icon="LogoutVariant"
        />
      </el-header>

      <el-main>
        <RouterView />
      </el-main>
    </el-container>
  </div>
</template>

<style>
:root {
  --vsdp-primary-color: #69ddb8;
  --vsdp-accent-color: var(--vsdp-primary-color);
  --vsdp-secondary-color: #3f9878;
  --vsdp-primary-text: #0b4f38;
}
</style>
