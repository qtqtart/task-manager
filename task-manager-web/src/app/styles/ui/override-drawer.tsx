import { OverridedComponent } from '../model/types'

export const OverrideDrawer = (_: Theme) =>
  ({
    MuiDrawer: {
      styleOverrides: {
        paper: {
          border: 'none',
          boxShadow: 'none',
        },
      },
    },
  }) as OverridedComponent
