import { breakpoints } from '@app/styles'
import { Breakpoint } from '@mui/material'

export function getMediaQuery(breakpoint: Breakpoint) {
  const breakpointValue = breakpoints.values![breakpoint]

  if (!breakpointValue) throw new Error(`invalid breakpoint: ${breakpoint}`)

  return window.matchMedia(`(max-width: ${breakpointValue}px)`).matches
}
