import useCalendar from '../useCalendar'

export default function WeeklyView() {
  const { date } = useCalendar()
  return <div>Weekly view starting {date.toDateString()}</div>
}

