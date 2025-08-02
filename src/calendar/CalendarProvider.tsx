import { useState } from 'react'
import { CalendarContext } from './CalendarContext'
import type { View } from './CalendarContext'

export default function CalendarProvider({ children }: { children: React.ReactNode }) {
  const [date, setDate] = useState(new Date())
  const [view, setView] = useState<View>('daily')

  return (
    <CalendarContext.Provider value={{ date, view, setDate, setView }}>
      {children}
    </CalendarContext.Provider>
  )
}

