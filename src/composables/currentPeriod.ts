import { ref } from 'vue'
import dayjs from '@/common/dayjs'

dayjs.locale('pl')

export default ref(dayjs())
