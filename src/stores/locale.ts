import { defineStore } from 'pinia'
import i18n from '@/i18n'

type AppLocales = typeof i18n.global.locale.value

interface LocaleState {
  locale: AppLocales
}

const useLocale = defineStore('locale', {
  state: (): LocaleState => ({
    locale: navigator.language as AppLocales,
  }),
  getters: {
    dayJsLocale({ locale }) {
      const localesMap: Record<string, string> = {
        ukr: 'uk',
      }

      return localesMap[locale] || locale
    },
  },
  actions: {
    setLocale(locale: AppLocales) {
      this.locale = locale
      this.sync()
    },
    sync() {
      const { t, locale } = i18n.global

      locale.value = this.locale
      document.title = t('appName')
    },
  },
  persist: {
    afterRestore(ctx) {
      ctx.store.sync()
    },
  },
})

export default useLocale
