import { DarkMode as DarkModeIcon, LightMode as LightModeIcon } from '@mui/icons-material'
import { IconButton } from '@mui/material'
import { FC } from 'react'

import { useThemeMode } from '../lib/use-theme-mode'

export const ToggleThemeMode: FC = () => {
  const { themeMode, toggleThemeMode } = useThemeMode()

  return <IconButton onClick={() => toggleThemeMode()}>{themeMode ? <DarkModeIcon /> : <LightModeIcon />}</IconButton>
}
