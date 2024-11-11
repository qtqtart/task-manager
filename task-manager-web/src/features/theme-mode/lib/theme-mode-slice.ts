import { PaletteMode } from '@mui/material'
import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { getSystemThemeMode } from '@shared/utils/get-system-theme-mode'

import { ThemeModeState } from '../model/types'

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
