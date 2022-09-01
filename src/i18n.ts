import { createI18n } from 'vue-i18n'

import pl from './locales/pl.json'
import en from './locales/en.json'
import ukr from './locales/ukr.json'

const storageLocale = JSON.parse(localStorage.getItem('locale')!)?.locale
const defaultAppLocale = 'pl'

const possibleLocaleSources = [
  storageLocale,
  navigator.language,
  defaultAppLocale,
]
const locale = possibleLocaleSources.find(Boolean)

const i18n = createI18n({
  legacy: false,
  globalInjection: true,
  locale,
  messages: {
    en,
    pl,
    ukr,
  },
})

export default i18n
