import { createI18n } from 'vue-i18n'
import { locale } from '@/common/userLang'

import pl from './locales/pl.json'
import en from './locales/en.json'
import ukr from './locales/ukr.json'

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
