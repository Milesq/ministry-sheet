import dayjs from 'dayjs'
import 'dayjs/locale/pl'
import 'dayjs/locale/en'
import 'dayjs/locale/uk'
import weekday from 'dayjs/plugin/weekday'
import { locale } from '@/common/userLang'

dayjs.extend(weekday)

const localesMap: Record<string, string> = {
  ukr: 'uk',
}
const localeKey = localesMap[locale] || locale

dayjs.locale(localeKey)

export default dayjs
