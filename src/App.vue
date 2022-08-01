<script setup lang="ts">
import { useRouter } from 'vue-router'
import Home from '~icons/mdi/Home'
import LogoutVariant from '~icons/mdi/LogoutVariant'
import Brightness from '~icons/mdi/brightness'
import WeatherNight from '~icons/mdi/WeatherNight'
import useUser from '@/stores/user'

import MenuItem from './components/MenuItem.vue'
import theme from './composables/theme'

const router = useRouter()
const user = useUser()

function logout() {
  user.logout()
  router.push({
    name: 'login',
  })
}
</script>

<template>
  <div class="common-layout">
    <el-container>
      <el-header
        bg="primary"
        class="flex justify-between items-center text-[2rem]"
      >
        <div class="md:hidden">
          <el-button round color="transparent" class="uppercase !font-semibold">
            Grafik Wózków
          </el-button>
        </div>
        <div class="hidden md:block">
          <MenuItem tooltip="Strona Główna" :icon="Home" />
        </div>

        <div flex="1"></div>

        <MenuItem
          @click="theme.toggle()"
          :tooltip="$t('changeTheme')"
          :icon="theme.isDark ? WeatherNight : Brightness"
        />
        <MenuItem
          @click="logout"
          v-if="user.isLoggedIn"
          tooltip="Wyloguj się"
          :icon="LogoutVariant"
        />
      </el-header>

      <el-main>
        <RouterView />
      </el-main>
    </el-container>
  </div>
</template>
