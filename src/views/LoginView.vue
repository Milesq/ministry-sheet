<script setup lang="ts">
import useUser from '@/stores/user'
import { onBeforeMount, ref } from 'vue'
import { useRouter } from 'vue-router'

const user = useUser()
const router = useRouter()

const userName = ref('')

function login() {
  user.login(userName.value)
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
          <span font="medium" text="xl">Podaj imię i Nazwisko</span>
        </template>
        <el-form flex="~ col" @submit.prevent="login">
          <el-form-item>
            <el-input
              v-model="userName"
              placeholder="Imie i nazwisko"
            ></el-input>
          </el-form-item>

          <el-divider />

          <el-button @click="login" type="success" place="self-end">
            Potwierdź
          </el-button>
        </el-form>
      </el-card>
    </el-col>
  </el-row>
</template>
