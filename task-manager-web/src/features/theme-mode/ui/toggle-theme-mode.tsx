import { FC } from 'react'
import { useThemeMode } from '../lib/use-theme-mode'
import { IconButton } from '@mui/material'
import { DarkMode as DarkModeIcon, LightMode as LightModeIcon } from '@mui/icons-material'

export const ToggleThemeMode: FC = () => {
  const { themeMode, toggleThemeMode } = useThemeMode()

  return <IconButton onClick={() => toggleThemeMode()}>{themeMode ? <DarkModeIcon /> : <LightModeIcon />}</IconButton>
}
