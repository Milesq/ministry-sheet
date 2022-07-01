import type { Dayjs } from "dayjs"

export default interface CalendarEvent {
  id: string
  content: string
  datetime: Dayjs
}
