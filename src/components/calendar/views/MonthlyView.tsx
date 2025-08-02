import { Box } from '@chakra-ui/react'
import { useCalendar } from '../CalendarProvider'
import OccupancySummary from '../OccupancySummary'

export default function MonthlyView() {
  const { date } = useCalendar()
  return (
    <Box>
      <OccupancySummary />
      <Box>Monthly view - {date.format('MMMM YYYY')}</Box>
    </Box>
  )
}
