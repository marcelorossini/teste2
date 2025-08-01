import { useParams } from 'react-router-dom'
import { Badge, Box, Heading, Text } from '@chakra-ui/react'

export default function ConsultaDetalhe() {
  const { id } = useParams()
  return (
    <Box p={4}>
      <Heading size="md" mb={4}>
        Consulta {id}
      </Heading>
      <Text mb={2}>Paciente: Fulano</Text>
      <Text mb={2}>Tipo: Avaliação</Text>
      <Text mb={2}>Observações: ---</Text>
      <Badge colorScheme="green">Agendada</Badge>
    </Box>
  )
}
