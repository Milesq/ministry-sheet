import { defineStore } from 'pinia'

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
    },
  },
  persist: true,
})

export default useLocale
