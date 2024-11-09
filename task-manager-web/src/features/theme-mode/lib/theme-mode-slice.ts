import { PaletteMode } from '@mui/material'
import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import { ThemeModeState } from '../model/types'
import { getSystemThemeMode } from './get-system-theme-mode'

const initialState: ThemeModeState = {
  themeMode: getSystemThemeMode(),
}

export const themeModeSlice = createSlice({
  initialState,
  name: 'themeMode',
  reducers: {
    setThemeMode: (state, { payload }: PayloadAction<PaletteMode>) => {
      state.themeMode = payload
    },
  },
})
