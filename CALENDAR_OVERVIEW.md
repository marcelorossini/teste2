# Calendar Architecture Overview

## Reusable components
- **Buttons, modals, tooltips, loaders**: Chakra UI already provides consistent implementations and will be reused.
- **Colors and typography**: Chakra theme keeps a centralized style, allowing calendar components to follow the same palette and font settings.

## Responsiveness and breakpoints
- Project follows a mobile-first approach with Chakra's default breakpoints.
- Existing views use flexible `Box`/`Flex` layouts that scale up without custom breakpoints.
- Calendar components were created keeping this pattern; additional breakpoints can leverage Chakra's sm/md/lg tokens if needed.

## Tests
- The project currently has no test script. `npm test` returns a missing script error.
- `npm run lint` was executed to verify code style.

## Architecture understanding
- Routing is handled with React Router and wrapped in a `Layout` component.
- Pages live under `src/pages` and are lazy-loaded.
- The new calendar lives at `/calendario` and is composed of a `CalendarProvider` context plus view components (daily, weekly, monthly).

## Dependencies added
- `dayjs` for lightweight date handling.
- `@tanstack/react-query` and `@tanstack/react-virtual` for data caching and virtualization.
- `@dnd-kit/core` and `@dnd-kit/sortable` to enable drag & drop interactions.

