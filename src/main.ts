import { createApp } from 'vue'
import { Amplify } from '@aws-amplify/core'
import { Auth } from '@aws-amplify/auth'
import { createPinia } from 'pinia'
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import 'element-plus/theme-chalk/dark/css-vars.css'
import 'virtual:windi.css'
import '../node_modules/vue3-single-date-picker/dist/style.css'
import '@/common/dayjs'

import App from './App.vue'
import router from './router'
import i18n from './i18n'
import awsExports from './aws-exports.js'
import './assets/style.scss'

Amplify.configure(awsExports)
Auth.configure(awsExports)

const app = createApp(App)

const pinia = createPinia()

pinia.use(piniaPluginPersistedstate)

app.use(pinia)

app.use(router)

app.use(ElementPlus)

app.use(i18n)

app.mount('#app')
