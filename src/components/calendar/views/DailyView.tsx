import { Box } from '@chakra-ui/react'
import { useCalendar } from '../CalendarProvider'

export default function DailyView() {
  const { date } = useCalendar()
  return <Box>Daily view - {date.format('DD/MM/YYYY')}</Box>
}
