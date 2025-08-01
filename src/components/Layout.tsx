import { Suspense } from 'react'
import { Outlet, useLocation, Link } from 'react-router-dom'
import { Box, Flex, IconButton } from '@chakra-ui/react'
import { CalendarIcon, AddIcon, SettingsIcon, InfoIcon } from '@chakra-ui/icons'

export default function Layout() {
  const location = useLocation()
  return (
    <Flex direction="column" minH="100vh">
      <Box as="header" p={4} bg="gray.700" color="white" textAlign="center">
        Agendador
      </Box>
      <Box flex="1" p={4}>
        <Suspense fallback={<div>Carregando...</div>}>
          <Outlet />
        </Suspense>
      </Box>
      <Flex as="nav" p={2} bg="gray.100" justify="space-around">
        <IconButton
          aria-label="Consultas"
          icon={<CalendarIcon />}
          as={Link}
          to="/consultas"
          variant={location.pathname.startsWith('/consultas') ? 'solid' : 'ghost'}
        />
        <IconButton aria-label="Agendar" icon={<AddIcon />} as={Link} to="/consultas/nova" variant={location.pathname === '/consultas/nova' ? 'solid' : 'ghost'} />
        <IconButton aria-label="Perfil" icon={<InfoIcon />} as={Link} to="/perfil" variant={location.pathname === '/perfil' ? 'solid' : 'ghost'} />
        <IconButton aria-label="Configurações" icon={<SettingsIcon />} as={Link} to="/configuracoes" variant={location.pathname === '/configuracoes' ? 'solid' : 'ghost'} />
      </Flex>
    </Flex>
  )
}
