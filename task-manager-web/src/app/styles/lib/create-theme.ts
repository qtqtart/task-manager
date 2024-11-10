import { createTheme as MUICreateTheme, PaletteMode } from '@mui/material'

import { breakpoints } from './breakpoints'
import { palette } from './palette'
import { shadows } from './shadows'
import { typography } from './typography'

export function createTheme(themeMode: PaletteMode) {
  return MUICreateTheme({
    breakpoints,
    palette: palette(themeMode),
    shadows,
    shape: {
      borderRadius: 9,
    },
    typography: typography(themeMode),
  })
}
