import { dashboardSlice } from '@features/dashboard'
import { themeModeSlice } from '@features/theme-mode'
import { combineReducers } from '@reduxjs/toolkit'

export const appReducer = combineReducers({
  [dashboardSlice.name]: dashboardSlice.reducer,
  [themeModeSlice.name]: themeModeSlice.reducer,
})
