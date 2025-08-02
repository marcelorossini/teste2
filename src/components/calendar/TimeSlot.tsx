import { Box } from '@chakra-ui/react'

export default function TimeSlot({ children }: { children?: React.ReactNode }) {
  return (
    <Box borderWidth="1px" borderRadius="md" p={2} minH="40px">
      {children || '—'}
    </Box>
  )
}
