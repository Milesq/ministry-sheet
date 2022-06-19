import { reactive } from 'vue'
import { useDark, useToggle } from '@vueuse/core'

export const isDark = useDark()
export const toggle = useToggle(isDark)

export default reactive({
  isDark,
  toggle,
})
