import { themeModeSlice } from '@features/theme-mode'
import { combineReducers } from '@reduxjs/toolkit'

export const appReducer = combineReducers({
  [themeModeSlice.name]: themeModeSlice.reducer,
})
