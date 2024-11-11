import { Breakpoint, useMediaQuery, useTheme } from '@mui/material'

export function useResponsive(query: 'between' | 'down' | 'only' | 'up', start: Breakpoint, end?: Breakpoint) {
  const { breakpoints } = useTheme()

  const only = useMediaQuery(breakpoints.only(start))
  const up = useMediaQuery(breakpoints.up(start))
  const down = useMediaQuery(breakpoints.down(start))
  const between = useMediaQuery(breakpoints.between(start, end!))

  if (query === 'only') return only
  if (query === 'up') return up
  if (query === 'down') return down
  return between
}
