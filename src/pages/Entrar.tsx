import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Input,
  Switch,
  Text,
} from '@chakra-ui/react'
import { useEffect, useRef, useState } from 'react'

export default function Entrar() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [remember, setRemember] = useState(false)
  const [errors, setErrors] = useState<{ email?: string; password?: string }>({})
  const emailRef = useRef<HTMLInputElement>(null)

  useEffect(() => {
    emailRef.current?.focus()
  }, [])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const errs: { email?: string; password?: string } = {}
    if (!email) errs.email = 'Informe o e-mail'
    if (!password) errs.password = 'Informe a senha'
    setErrors(errs)
    if (Object.keys(errs).length === 0) {
      console.log({ email, password, remember })
    }
  }

  return (
    <Box as="form" onSubmit={handleSubmit} pt={4} px={4}>
      <FormControl mb={3} isInvalid={!!errors.email}>
        <FormLabel>E-mail</FormLabel>
        <Input
          ref={emailRef}
          type="email"
          inputMode="email"
          h="48px"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        {errors.email && (
          <Text fontSize="sm" color="red.500">
            {errors.email}
          </Text>
        )}
      </FormControl>
      <FormControl mb={3} isInvalid={!!errors.password}>
        <FormLabel>Senha</FormLabel>
        <Input
          type="password"
          h="48px"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        {errors.password && (
          <Text fontSize="sm" color="red.500">
            {errors.password}
          </Text>
        )}
      </FormControl>
      <FormControl display="flex" alignItems="center" mb={6}>
        <Switch
          id="lembrar"
          mr={2}
          isChecked={remember}
          onChange={(e) => setRemember(e.target.checked)}
        />
        <FormLabel htmlFor="lembrar" mb="0">
          Lembrar-me
        </FormLabel>
      </FormControl>
      <Box position="sticky" bottom="0" py={2} bg="white">
        <Button w="full" type="submit" colorScheme="teal" fontSize="16px" h="48px">
          Entrar
        </Button>
      </Box>
    </Box>
  )
}
