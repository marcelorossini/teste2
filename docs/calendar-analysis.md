# Calendar Feature Analysis

This document summarizes the current project architecture and how a calendar module can be integrated.

## Project Stack Overview

### Build and Tooling
- **Bundler:** Vite with TypeScript (`vite.config.ts`)
- **Scripts:** `npm run dev`, `npm run build`, `npm run lint`
- **Linting:** ESLint with React and TypeScript presets

### Styling
- **Component library:** Chakra UI
- **Utility classes:** Tailwind CSS configured in `src/index.css` but used sparingly

### Routing
- **Router:** React Router DOM v6
- **Code splitting:** pages imported via `lazy` and displayed through `Suspense`
- **Layout:** `src/components/Layout.tsx` provides header and bottom navigation

### State Management
- Local `useState` and `useEffect` hooks only
- No global store (Redux, Zustand, etc.)

### API / Data Fetching
- No backend integration yet; pages contain mock or local data

### Folder Structure
- `src/pages` – route-based pages (`Entrar`, `Cadastrar`, `Consultas`, etc.)
- `src/components` – shared UI such as `Layout`
- `src/assets` – static files

### Responsiveness
- Chakra's responsive props are used; no custom breakpoints are defined
- Mobile-first styles via Chakra defaults

### Testing
- No test configuration; `npm test` script is missing

## Calendar Integration Plan

### Placement
- Expand the **Consultas** section with a new route, e.g. `/consultas/calendario`
- Navigation already links to `/consultas`; a nested route keeps the flow consistent

### Components and Structure
- Create a new folder `src/features/calendar`
  - `CalendarProvider` for current date/view and drag state
  - View components: `DailyView`, `WeeklyView`, `MonthlyView`
  - UI helpers: `ViewSwitcher`, `DateNavigator`, `TimeSlot`, `AppointmentCard`
  - Optional widgets: `OccupancySummary`, modals for create/edit
- Components use Chakra UI and follow mobile-first design

### Proposed Dependencies
- `dayjs` – lightweight date manipulation
- `@dnd-kit/core` and `@dnd-kit/sortable` – drag & drop interactions
- `@tanstack/react-query` – fetch and cache appointments
- `@tanstack/react-virtual` – virtualize long lists (optional)

These libraries integrate well with Chakra UI and keep the bundle light.

### Implementation Notes
- Mock API endpoints for `/appointments` and `/blocks` during early development
- Provider should expose hooks like `useCalendar` and `useAppointments`
- Routes will be updated in `App.tsx` to include the calendar path
- Start mobile first (375px) and scale up using Chakra's breakpoints

### Next Steps
1. Install the dependencies above
2. Implement provider and skeleton views
3. Fetch mock data with React Query
4. Add drag & drop logic with `@dnd-kit`
5. Write basic tests for hooks and components
