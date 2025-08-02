import { Box, Text } from '@chakra-ui/react'

interface Props {
  title: string
}

export default function AppointmentCard({ title }: Props) {
  return (
    <Box bg="teal.100" p={2} borderRadius="md">
      <Text fontSize="sm">{title}</Text>
    </Box>
  )
}
