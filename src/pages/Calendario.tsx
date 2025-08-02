import { VStack } from '@chakra-ui/react'
import {
  CalendarProvider,
  ViewSwitcher,
  DateNavigator,
  DailyView,
  WeeklyView,
  MonthlyView,
  useCalendar,
} from '../components/calendar'

function CalendarViews() {
  const { view } = useCalendar()
  switch (view) {
    case 'day':
      return <DailyView />
    case 'week':
      return <WeeklyView />
    default:
      return <MonthlyView />
  }
}

export default function Calendario() {
  return (
    <CalendarProvider>
      <VStack spacing={4} align="stretch">
        <ViewSwitcher />
        <DateNavigator />
        <CalendarViews />
      </VStack>
    </CalendarProvider>
  )
}
