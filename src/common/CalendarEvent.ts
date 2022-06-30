import type { Dayjs } from "dayjs"

export default interface CalendarEvent {
  name: string
  description: string
  datetime: Dayjs
}
