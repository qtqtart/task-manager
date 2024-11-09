import { ChangeLanguage } from '@features/language'
import { useThemeMode } from '@features/theme-mode'
import { DarkMode as DarkModeIcon, LightMode as LightModeIcon } from '@mui/icons-material'
import { Container, IconButton } from '@mui/material'
import { FC } from 'react'

export const HomePage: FC = () => {
  const { themeMode, toggleThemeMode } = useThemeMode()

  const onClick = () => toggleThemeMode()

  return (
    <Container maxWidth="lg">
      <IconButton onClick={onClick}>{themeMode === 'dark' ? <DarkModeIcon /> : <LightModeIcon />}</IconButton>

      <ChangeLanguage />
    </Container>
  )
}
