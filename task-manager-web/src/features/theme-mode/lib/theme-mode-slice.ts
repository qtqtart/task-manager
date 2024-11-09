import { createSlice } from '@reduxjs/toolkit'

import { ThemeModeState } from '../model/types'

const initialState: ThemeModeState = {
  themeMode: window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light',
}

export const themeModeSlice = createSlice({
  initialState,
  name: 'themeMode',
  reducers: {
    toggleThemeMode: (state) => {
      state.themeMode = state.themeMode === 'dark' ? 'light' : 'dark'
    },
  },
})
