import { HStack, IconButton, Text } from '@chakra-ui/react'
import { ChevronLeftIcon, ChevronRightIcon } from '@chakra-ui/icons'
import { useCalendar } from './CalendarProvider'

export default function DateNavigator() {
  const { date, setDate, view } = useCalendar()
  const amount = view === 'day' ? 'day' : view === 'week' ? 'week' : 'month'
  const prev = () => setDate(date.add(-1, amount))
  const next = () => setDate(date.add(1, amount))
  return (
    <HStack spacing={2} align="center">
      <IconButton aria-label="Anterior" icon={<ChevronLeftIcon />} onClick={prev} size="sm" />
      <Text fontWeight="bold">{date.format(view === 'month' ? 'MMMM YYYY' : 'DD/MM/YYYY')}</Text>
      <IconButton aria-label="Próximo" icon={<ChevronRightIcon />} onClick={next} size="sm" />
    </HStack>
  )
}
