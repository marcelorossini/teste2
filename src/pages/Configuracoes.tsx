import { Box, Button, FormControl, FormLabel, Switch } from '@chakra-ui/react'
import { useState } from 'react'

export default function Configuracoes() {
  const [temaEscuro, setTemaEscuro] = useState(false)

  return (
    <Box p={4}>
      <FormControl display="flex" alignItems="center" mb={6}>
        <FormLabel htmlFor="tema" mb="0">
          Tema escuro
        </FormLabel>
        <Switch
          id="tema"
          size="lg"
          isChecked={temaEscuro}
          onChange={(e) => setTemaEscuro(e.target.checked)}
        />
      </FormControl>
      <Box position="sticky" bottom="0" py={2} bg="white">
        <Button w="full" colorScheme="red">
          Logout
        </Button>
      </Box>
    </Box>
  )
}
