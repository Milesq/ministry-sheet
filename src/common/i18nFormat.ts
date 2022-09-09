import useLocale from '@/stores/locale'
import type { Dayjs } from 'dayjs'

function i18nFormat(date: Dayjs, format: string) {
  const locale = useLocale()

  return date.locale(locale.dayJsLocale).format(format)
}

export default i18nFormat
