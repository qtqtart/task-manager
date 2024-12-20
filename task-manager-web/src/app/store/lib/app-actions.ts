import { dashboardSlice } from '@features/dashboard'
import { themeModeSlice } from '@features/theme-mode'

export const appActions = {
  ...themeModeSlice.actions,
  ...dashboardSlice.actions,
}
