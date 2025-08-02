# Integração do Calendário

## Arquitetura atual
- Aplicação React criada com Vite e TypeScript. As rotas são gerenciadas com `react-router-dom` e ficam centralizadas em `App.tsx`.
- O layout base usa componentes do **Chakra UI** (`Flex`, `Box`, `IconButton`) e provê cabeçalho fixo, área de conteúdo com `Outlet` e navegação inferior.
- Páginas são carregadas de forma assíncrona (`lazy`) para reduzir o bundle inicial.

## Componentes reutilizáveis
- **Navegação e botões:** `IconButton`, `Button` e `Flex` do Chakra, já usados na barra inferior e em formulários.
- **Formulários:** `FormControl`, `Input`, `Select`, `Switch`, `Textarea` e `Text` para feedback de validação.
- **Loaders e feedback:** `Skeleton` para estados de carregamento e `Stack/Box` para layout responsivo.
- **Outros disponíveis no Chakra:** `Modal`, `Tooltip`, `Badge` e `Avatar`, úteis para detalhamento de eventos e interações no calendário.

Esses elementos podem ser reutilizados para construir botões de navegação de data, cartões de evento, indicadores de carregamento e modais de criação/edição.

## Responsividade
- O projeto usa o meta `viewport` padrão e os breakpoints do Chakra (`sm`, `md`, `lg`, `xl`, `2xl`).
- A estrutura existente é **mobile first**: o `Layout` ocupa `minH="100vh"` e a lista de consultas usa `h="calc(100vh - 120px)"` com `overflowY="auto"`.
- Ao integrar o calendário, devemos manter o fluxo vertical no mobile e usar breakpoints do Chakra para ampliar a visualização em telas maiores.

## Testes existentes
- Não há script de testes configurado. `npm test` retorna erro de script ausente.
- Atualmente não há cobertura nem testes de UI. Sugestão: adicionar `vitest` + `@testing-library/react` para testes de componentes e interações futuras.

## Onde o calendário se encaixa
- A rota `/consultas` hoje exibe uma lista paginada de consultas. O calendário substituiria ou complementaria essa página, permitindo visualizar agendamentos em formato diário/semanal/mensal.
- Poderíamos criar um componente `CalendarPage` em `src/pages/Consultas/Calendar.tsx` e, opcionalmente, uma nova rota (`/consultas/calendario`).

## Dependências sugeridas
- **`react-big-schedule`**: componente de agenda a ser embutido.
- **`dayjs`**: manipulação de datas leve e pluginável.
- (Opcional) **`@tanstack/react-query`** para cache e sincronização de agendamentos/bloqueios com a API quando forem implementados.

## Próximos passos
1. Adicionar as dependências listadas acima.
2. Criar `CalendarPage` utilizando `react-big-schedule` e reaproveitar componentes do Chakra para navegação e modais.
3. Definir testes básicos para o provider/estado do calendário assim que a base estiver criada.
