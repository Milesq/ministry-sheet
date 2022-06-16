import { createApp } from 'vue'
import { Amplify } from '@aws-amplify/core'
import ElementPlus from 'element-plus'
import pl from 'element-plus/es/locale/lang/pl'
import 'element-plus/dist/index.css'

import App from './App.vue'
import router from './router'
import awsExports from './aws-exports.js'

Amplify.configure(awsExports)

const app = createApp(App)

app.use(router)

app.use(ElementPlus, {
  locale: pl,
})

app.mount('#app')
