import { Box } from '@chakra-ui/react'
import { useCalendar } from '../CalendarProvider'

export default function WeeklyView() {
  const { date } = useCalendar()
  return <Box>Weekly view starting {date.startOf('week').format('DD/MM')}</Box>
}
