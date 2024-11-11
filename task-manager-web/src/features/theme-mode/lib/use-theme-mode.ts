import { useAppActions, useAppSelector } from '@app/store'
import { PaletteMode } from '@mui/material'
import { useCallback } from 'react'

export function useThemeMode() {
  const { themeMode } = useAppSelector(({ themeMode }) => themeMode)
  const { setThemeMode } = useAppActions()

  const onChangeTheme = useCallback(
    (_themeMode: PaletteMode) => {
      setThemeMode(_themeMode)
    },
    [setThemeMode],
  )

  return {
    onChangeTheme,
    themeMode,
  }
}
