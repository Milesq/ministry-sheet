import { defineStore } from 'pinia'
import i18n from '@/i18n'

interface LocaleState {
  locale: string
}

const useLocale = defineStore('locale', {
  state: (): LocaleState => ({
    locale: navigator.language,
  }),
  actions: {
    setLocale(locale: string) {
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
