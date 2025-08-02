import { useContext } from 'react'
import { CalendarContext } from './CalendarContext'

export default function useCalendar() {
  const ctx = useContext(CalendarContext)
  if (!ctx) throw new Error('useCalendar must be used within CalendarProvider')
  return ctx
}

