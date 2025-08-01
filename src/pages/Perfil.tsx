import { Avatar, Box, Button, FormControl, FormLabel, Input } from '@chakra-ui/react'
import { useState } from 'react'

export default function Perfil() {
  const [form, setForm] = useState({ nome: '', email: '' })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log(form)
  }

  return (
    <Box as="form" onSubmit={handleSubmit} pt={4} px={4}>
      <Avatar size="xl" mb={4} alignSelf="center" />
      <FormControl mb={3}>
        <FormLabel>Nome</FormLabel>
        <Input name="nome" value={form.nome} onChange={handleChange} h="48px" />
      </FormControl>
      <FormControl mb={6}>
        <FormLabel>E-mail</FormLabel>
        <Input name="email" type="email" value={form.email} onChange={handleChange} h="48px" />
      </FormControl>
      <Box position="sticky" bottom="0" py={2} bg="white">
        <Button w="full" type="submit" colorScheme="teal" h="48px">
          Salvar
        </Button>
      </Box>
    </Box>
  )
}
