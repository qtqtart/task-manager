import { Theme } from '@mui/material'

import { OverrideDrawer } from '../ui/override-drawer'
import { OverrideSelect } from '../ui/override-select'

export const overrideComponents = (theme: Theme) => Object.assign(OverrideSelect(theme), OverrideDrawer(theme))
