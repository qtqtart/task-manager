import { DarkMode as DarkModeIcon, LightMode as LightModeIcon } from '@mui/icons-material'
import { PaletteMode } from '@mui/material'
import { JSX } from 'react'
import { useTranslation } from 'react-i18next'

export function useThemeModeOptions() {
  const { t } = useTranslation()

  const themeModeOptions: {
    icon: JSX.Element
    label: string
    value: PaletteMode
  }[] = [
    {
      icon: <DarkModeIcon />,
      label: t('dark'),
      value: 'dark',
    },
    {
      icon: <LightModeIcon />,
      label: t('light'),
      value: 'light',
    },
  ]

  return { themeModeOptions }
}
