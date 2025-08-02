import CalendarProvider from '../calendar/CalendarProvider'
import useCalendar from '../calendar/useCalendar'
import DateNavigator from '../calendar/DateNavigator'
import ViewSwitcher from '../calendar/ViewSwitcher'
import DailyView from '../calendar/views/DailyView'
import WeeklyView from '../calendar/views/WeeklyView'
import MonthlyView from '../calendar/views/MonthlyView'

function CalendarViews() {
  const { view } = useCalendar()
  switch (view) {
    case 'weekly':
      return <WeeklyView />
    case 'monthly':
      return <MonthlyView />
    default:
      return <DailyView />
  }
}

export default function Calendario() {
  return (
    <CalendarProvider>
      <ViewSwitcher />
      <DateNavigator />
      <CalendarViews />
    </CalendarProvider>
  )
}

