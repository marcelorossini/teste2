import useCalendar from './useCalendar'

export default function ViewSwitcher() {
  const { view, setView } = useCalendar()

  return (
    <div>
      <button onClick={() => setView('daily')} disabled={view === 'daily'}>
        Daily
      </button>
      <button onClick={() => setView('weekly')} disabled={view === 'weekly'}>
        Weekly
      </button>
      <button onClick={() => setView('monthly')} disabled={view === 'monthly'}>
        Monthly
      </button>
    </div>
  )
}

