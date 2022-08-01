import { defineStore } from 'pinia'
import dayjs from 'dayjs'
import { useI18n } from 'vue-i18n'

const i18n = useI18n()

interface LocaleState {
  locale: string
}

const useLocale = defineStore('locale', {
  state: (): LocaleState => ({
    locale: navigator.language || 'pl',
  }),
  actions: {
    setLocale(locale: string) {
      this.locale = locale
      this.sync()
    },
    sync() {
      i18n.locale.value = this.locale
      dayjs.locale(this.locale)
    },
  },
  persist: true,
})

export default useLocale
