import { lazy } from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Layout from './components/Layout'

const Entrar = lazy(() => import('./pages/Entrar'))
const Cadastrar = lazy(() => import('./pages/Cadastrar'))
const Consultas = lazy(() => import('./pages/Consultas/Index'))
const Nova = lazy(() => import('./pages/Consultas/Nova'))
const Detalhes = lazy(() => import('./pages/Consultas/[id]'))
const Perfil = lazy(() => import('./pages/Perfil'))
const Configuracoes = lazy(() => import('./pages/Configuracoes'))

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      { index: true, element: <Entrar /> },
      { path: 'entrar', element: <Entrar /> },
      { path: 'cadastrar', element: <Cadastrar /> },
      { path: 'consultas', element: <Consultas /> },
      { path: 'consultas/nova', element: <Nova /> },
      { path: 'consultas/:id', element: <Detalhes /> },
      { path: 'perfil', element: <Perfil /> },
      { path: 'configuracoes', element: <Configuracoes /> },
    ],
  },
])

export default function App() {
  return <RouterProvider router={router} />
}
