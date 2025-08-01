import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Input,
  Text,
} from '@chakra-ui/react'
import { useState } from 'react'

export default function Cadastrar() {
  const [form, setForm] = useState({
    nome: '',
    email: '',
    senha: '',
    confirmar: '',
    telefone: '',
  })
  const [errors, setErrors] = useState<Record<string, string>>({})

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const errs: Record<string, string> = {}
    if (!form.nome) errs.nome = 'Informe o nome'
    if (!form.email) errs.email = 'Informe o e-mail'
    if (!form.senha) errs.senha = 'Informe a senha'
    if (form.confirmar !== form.senha) errs.confirmar = 'Senhas não conferem'
    setErrors(errs)
    if (Object.keys(errs).length === 0) {
      console.log(form)
    }
  }

  return (
    <Box as="form" onSubmit={handleSubmit} pt={4} px={4}>
      <FormControl mb={3} isInvalid={!!errors.nome}>
        <FormLabel>Nome completo</FormLabel>
        <Input name="nome" h="48px" value={form.nome} onChange={handleChange} />
        {errors.nome && (
          <Text fontSize="sm" color="red.500">
            {errors.nome}
          </Text>
        )}
      </FormControl>
      <FormControl mb={3} isInvalid={!!errors.email}>
        <FormLabel>E-mail</FormLabel>
        <Input
          name="email"
          type="email"
          inputMode="email"
          h="48px"
          value={form.email}
          onChange={handleChange}
        />
        {errors.email && (
          <Text fontSize="sm" color="red.500">
            {errors.email}
          </Text>
        )}
      </FormControl>
      <FormControl mb={3} isInvalid={!!errors.senha}>
        <FormLabel>Senha</FormLabel>
        <Input
          name="senha"
          type="password"
          h="48px"
          value={form.senha}
          onChange={handleChange}
        />
        {errors.senha && (
          <Text fontSize="sm" color="red.500">
            {errors.senha}
          </Text>
        )}
      </FormControl>
      <FormControl mb={3} isInvalid={!!errors.confirmar}>
        <FormLabel>Confirmar senha</FormLabel>
        <Input
          name="confirmar"
          type="password"
          h="48px"
          value={form.confirmar}
          onChange={handleChange}
        />
        {errors.confirmar && (
          <Text fontSize="sm" color="red.500">
            {errors.confirmar}
          </Text>
        )}
      </FormControl>
      <FormControl mb={6}>
        <FormLabel>Telefone</FormLabel>
        <Input name="telefone" h="48px" value={form.telefone} onChange={handleChange} />
      </FormControl>
      <Box position="sticky" bottom="0" py={2} bg="white">
        <Button w="full" type="submit" colorScheme="teal" fontSize="16px" h="48px">
          Cadastrar
        </Button>
      </Box>
    </Box>
  )
}
