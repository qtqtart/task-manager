import { Theme } from '@mui/material'

import { OverrideSelect } from '../ui/override-select'

export const overrideComponents = (theme: Theme) => {
  return Object.assign(OverrideSelect(theme))
}
