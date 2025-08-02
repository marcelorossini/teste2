import useCalendar from '../useCalendar'

export default function MonthlyView() {
  const { date } = useCalendar()
  return <div>Monthly view for {date.toDateString()}</div>
}

