import { Theme } from '@mui/material'

import { OverridedComponent } from '../model/types'

export const OverrideSelect = (_: Theme) =>
  ({
    MuiSelect: {
      styleOverrides: {
        select: {
          alignItems: 'center',
          display: 'flex',
          justifyContent: 'center',
        },
      },
    },
  }) as OverridedComponent
