import { PaletteMode } from '@mui/material'
import { TypographyOptions } from '@mui/material/styles/createTypography'

import { palette } from './palette'

export const typography = (themeMode: PaletteMode) => {
  const { background } = palette(themeMode)

  return {
    body1: {
      color: background?.secondary,
      fontSize: '1rem',
      fontWeight: 'normal',
      letterSpacing: '0.5px',
      lineHeight: '1.5rem',
    },
    body2: {
      color: background?.secondary,
      fontSize: '0.875rem',
      fontWeight: 'normal',
      letterSpacing: '0.25px',
      lineHeight: '1.25rem',
    },
    button: {
      color: background?.onSurface,
      fontSize: '0.875rem',
      fontWeight: 'bold',
      letterSpacing: '0.1px',
      lineHeight: '1.25rem',
      textTransform: 'capitalize',
    },
    caption: {
      color: background?.onSurface,
      fontSize: '0.875rem',
      fontWeight: 'bold',
      letterSpacing: '0.1px',
      lineHeight: '1.25rem',
      textTransform: 'capitalize',
    },
    fontFamily: 'Roboto, sans-serif',
    fontWeightBold: 700,
    fontWeightMedium: 500,
    fontWeightRegular: 400,
    h1: {
      color: background?.onSurface,
      fontSize: '3.5rem',
      fontWeight: 'normal',
      letterSpacing: 0,
      lineHeight: '4rem',
      textTransform: 'capitalize',
    },
    h2: {
      color: background?.onSurface,
      fontSize: '3rem',
      fontWeight: 'normal',
      letterSpacing: 0,
      lineHeight: '3.5rem',
      textTransform: 'capitalize',
    },
    h3: {
      color: background?.onSurface,
      fontSize: '2.25rem',
      fontWeight: 'normal',
      letterSpacing: 0,
      lineHeight: '2.75rem',
      textTransform: 'capitalize',
    },
    h4: {
      color: background?.onSurface,
      fontSize: '2rem',
      fontWeight: 'normal',
      letterSpacing: 0,
      lineHeight: '2.5rem',
      textTransform: 'capitalize',
    },
    h5: {
      color: background?.onSurface,
      fontSize: '1.75rem',
      fontWeight: 'normal',
      letterSpacing: 0,
      lineHeight: '2.25rem',
      textTransform: 'capitalize',
    },
    h6: {
      color: background?.onSurface,
      fontSize: '1.5rem',
      fontWeight: 'normal',
      letterSpacing: 0,
      lineHeight: '2rem',
      textTransform: 'capitalize',
    },
    overline: {
      color: background?.onSurface,
      fontSize: '0.75rem',
      fontWeight: 'bold',
      letterSpacing: '0.5px',
      lineHeight: '1rem',
      textTransform: 'capitalize',
    },
    subtitle1: {
      color: background?.onSurface,
      fontSize: '1.375rem',
      fontWeight: 'bold',
      lineHeight: '1.75rem',
      textTransform: 'capitalize',
    },
    subtitle2: {
      color: background?.onSurface,
      fontSize: '1rem',
      fontWeight: 'bold',
      letterSpacing: '0.15px',
      lineHeight: '1.5rem',
      textTransform: 'capitalize',
    },
  } as TypographyOptions
}
