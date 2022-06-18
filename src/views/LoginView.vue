<script setup lang="ts">
import { ref } from 'vue'

const userName = ref('')
</script>

<template>
  <el-row justify="center">
    <el-col :sm="16" :md="8">
      <el-card>
        <template #header>
          <span font="medium" text="xl">Podaj imię i Nazwisko</span>
        </template>
        <el-form flex="~ col">
          <el-form-item>
            <el-input
              v-model="userName"
              placeholder="Imie i nazwisko"
            ></el-input>
          </el-form-item>

          <el-divider />

          <el-button type="success" place="self-end">Potwierdź</el-button>
        </el-form>
      </el-card>
    </el-col>
  </el-row>
</template>
