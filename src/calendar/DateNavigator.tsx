import useCalendar from './useCalendar'

export default function DateNavigator() {
  const { date, setDate, view } = useCalendar()

  const increment = () => {
    const newDate = new Date(date)
    if (view === 'daily') newDate.setDate(newDate.getDate() + 1)
    if (view === 'weekly') newDate.setDate(newDate.getDate() + 7)
    if (view === 'monthly') newDate.setMonth(newDate.getMonth() + 1)
    setDate(newDate)
  }

  const decrement = () => {
    const newDate = new Date(date)
    if (view === 'daily') newDate.setDate(newDate.getDate() - 1)
    if (view === 'weekly') newDate.setDate(newDate.getDate() - 7)
    if (view === 'monthly') newDate.setMonth(newDate.getMonth() - 1)
    setDate(newDate)
  }

  return (
    <div>
      <button onClick={decrement}>{'<'}</button>
      <span>{date.toDateString()}</span>
      <button onClick={increment}>{'>'}</button>
    </div>
  )
}

