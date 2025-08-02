import { createContext } from 'react'

export type View = 'daily' | 'weekly' | 'monthly'

export interface CalendarState {
  date: Date
  view: View
  setDate: (date: Date) => void
  setView: (view: View) => void
}

export const CalendarContext = createContext<CalendarState | undefined>(undefined)

