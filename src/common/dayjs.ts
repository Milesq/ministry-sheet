import dayjs from 'dayjs'
import 'dayjs/locale/pl'
import weekday from 'dayjs/plugin/weekday'

dayjs.extend(weekday)
dayjs.locale('pl')

export default dayjs
