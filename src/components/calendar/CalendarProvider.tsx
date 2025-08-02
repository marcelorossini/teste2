import { createContext, useContext, useState } from 'react'
import dayjs, { Dayjs } from 'dayjs'

export type View = 'day' | 'week' | 'month'

interface CalendarState {
  date: Dayjs
  view: View
  setDate: (d: Dayjs) => void
  setView: (v: View) => void
}

const CalendarContext = createContext<CalendarState | undefined>(undefined)

export function CalendarProvider({ children }: { children: React.ReactNode }) {
  const [date, setDate] = useState(dayjs())
  const [view, setView] = useState<View>('month')
  return (
    <CalendarContext.Provider value={{ date, view, setDate, setView }}>
      {children}
    </CalendarContext.Provider>
  )
}

// eslint-disable-next-line react-refresh/only-export-components
export function useCalendar() {
  const ctx = useContext(CalendarContext)
  if (!ctx) throw new Error('useCalendar must be used within CalendarProvider')
  return ctx
}
