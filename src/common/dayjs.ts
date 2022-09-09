import dayjs from 'dayjs'
import 'dayjs/locale/pl'
import 'dayjs/locale/en'
import 'dayjs/locale/uk'
import weekday from 'dayjs/plugin/weekday'

dayjs.extend(weekday)

dayjs.locale('pl') // for starting week from monday

export default dayjs
