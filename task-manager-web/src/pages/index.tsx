import { useThemeMode } from '@features/theme-mode'
import { Container, IconButton } from '@mui/material'
import { FC } from 'react'
import { DarkMode as DarkModeIcon, LightMode as LightModeIcon } from '@mui/icons-material'

export const HomePage: FC = () => {
  const { themeMode, toggleThemeMode } = useThemeMode()

  const onClick = () => toggleThemeMode()

  return (
    <Container maxWidth="lg">
      <IconButton onClick={onClick}>{themeMode === 'dark' ? <DarkModeIcon /> : <LightModeIcon />}</IconButton>
    </Container>
  )
}
