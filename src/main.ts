import { createApp } from 'vue'
import { Amplify } from '@aws-amplify/core'
import { Auth } from '@aws-amplify/auth'
import { createPinia } from 'pinia'
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'
import ElementPlus from 'element-plus'
import pl from 'element-plus/es/locale/lang/pl'
import 'element-plus/dist/index.css'
import 'element-plus/theme-chalk/dark/css-vars.css'
import 'virtual:windi.css'
import dayjs from 'dayjs'
import 'dayjs/locale/pl'
import weekday from 'dayjs/plugin/weekday'

import App from './App.vue'
import router from './router'
import i18n from './i18n'
import awsExports from './aws-exports.js'
import './assets/style.scss'

dayjs.extend(weekday)
dayjs.locale('pl')

Amplify.configure(awsExports)
Auth.configure(awsExports)

const app = createApp(App)

const pinia = createPinia()

pinia.use(piniaPluginPersistedstate)

app.use(pinia)

app.use(router)

app.use(ElementPlus, {
  locale: pl,
})

app.use(i18n)

app.mount('#app')
