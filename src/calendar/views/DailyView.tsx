import useCalendar from '../useCalendar'

export default function DailyView() {
  const { date } = useCalendar()
  return <div>Daily view for {date.toDateString()}</div>
}

