import { Component } from 'vue'

declare module 'vue3-single-date-picker' {
  declare const CalendarView: Component

  export { CalendarView }
}
