<script setup lang="ts">
import { computed, onBeforeMount, ref } from 'vue'
import { useRouter, useRoute } from 'vue-router'
import { useI18n } from 'vue-i18n'
import { Swal } from '@/common'
import { Routes } from '@/router'
import useUser from '@/stores/user'

const user = useUser()
const router = useRouter()
const route = useRoute()

const userName = ref('')
const pass = ref<string | undefined>()

const isAdminLogin = computed(() => route.name === Routes.AdminLogin)

const { t } = useI18n()

async function login() {
  try {
    await user.login(userName.value, pass.value)
  } catch {
    if (isAdminLogin.value) {
      Swal.fire(t('error.err'), t('error.incorrectLogin'), 'error')

      return
    }

    try {
      await user.requestAccess(userName.value)
      Swal.fire('', t('waitForUserAccept'), 'info')
    } catch {
      Swal.fire('', t('error.stillNotAccepted'), 'info')
    }
  } finally {
    userName.value = ''
    pass.value = undefined
  }

  router.push('/')
}

onBeforeMount(() => {
  if (user.isLoggedIn) {
    router.push('/')
  }
})
</script>

<template>
  <el-row justify="center">
    <el-col :sm="16" :md="8">
      <el-card>
        <template #header>
          <span font="medium" text="xl" v-t="'fulfillForm'"></span>
        </template>
        <el-form flex="~ col" @submit.prevent="login">
          <el-form-item>
            <el-input
              v-model="userName"
              :placeholder="$t('userNamePlaceholder')"
            ></el-input>
          </el-form-item>

          <el-form-item v-if="isAdminLogin">
            <el-input
              v-model="pass"
              type="password"
              :placeholder="$t('passwordPlaceholder')"
            ></el-input>
          </el-form-item>

          <el-divider />

          <el-button
            @click="login"
            type="success"
            place="self-end"
            v-t="'confirm[0]'"
            :disabled="!(userName && (!isAdminLogin || pass))"
          ></el-button>
        </el-form>
      </el-card>
    </el-col>
  </el-row>
</template>
