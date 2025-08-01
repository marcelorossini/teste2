import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Input,
  Select,
  Textarea,
} from '@chakra-ui/react'
import { useState } from 'react'

export default function NovaConsulta() {
  const [form, setForm] = useState({
    paciente: '',
    data: '',
    hora: '',
    tipo: '',
    obs: '',
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log(form)
  }

  return (
    <Box as="form" onSubmit={handleSubmit} pt={4} px={4}>
      <FormControl mb={3}>
        <FormLabel>Paciente</FormLabel>
        <Input name="paciente" value={form.paciente} onChange={handleChange} h="48px" />
      </FormControl>
      <FormControl mb={3}>
        <FormLabel>Data</FormLabel>
        <Input type="date" name="data" value={form.data} onChange={handleChange} h="48px" />
      </FormControl>
      <FormControl mb={3}>
        <FormLabel>Hora</FormLabel>
        <Input type="time" name="hora" value={form.hora} onChange={handleChange} h="48px" />
      </FormControl>
      <FormControl mb={3}>
        <FormLabel>Tipo de Consulta</FormLabel>
        <Select name="tipo" value={form.tipo} onChange={handleChange} h="48px">
          <option value="">Selecione</option>
          <option value="retorno">Retorno</option>
          <option value="primeira">Primeira vez</option>
        </Select>
      </FormControl>
      <FormControl mb={6}>
        <FormLabel>Observações</FormLabel>
        <Textarea name="obs" value={form.obs} onChange={handleChange} />
      </FormControl>
      <Box position="sticky" bottom="0" py={2} bg="white">
        <Button w="full" type="submit" colorScheme="teal" h="48px">
          Salvar
        </Button>
      </Box>
    </Box>
  )
}
