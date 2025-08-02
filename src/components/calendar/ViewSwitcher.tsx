import { Button, ButtonGroup } from '@chakra-ui/react'
import { useCalendar, View } from './CalendarProvider'

export default function ViewSwitcher() {
  const { view, setView } = useCalendar()
  const change = (v: View) => () => setView(v)
  return (
    <ButtonGroup size="sm" isAttached variant="outline">
      <Button onClick={change('day')} isActive={view === 'day'}>
        Dia
      </Button>
      <Button onClick={change('week')} isActive={view === 'week'}>
        Semana
      </Button>
      <Button onClick={change('month')} isActive={view === 'month'}>
        Mês
      </Button>
    </ButtonGroup>
  )
}
