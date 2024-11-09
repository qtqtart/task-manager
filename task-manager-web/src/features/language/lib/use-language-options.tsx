import { SvgIcon } from '@mui/material'
import { LANGUAGES } from '@shared/config/i18next/languages'
import { JSX } from 'react'

import RuIcon from '/public/icons/flags/ru.svg?react'
import UsIcon from '/public/icons/flags/us.svg?react'

export function useLanguageOptions() {
  const viewBox = '0 0 20 15'

  const languageOptions: {
    icon: JSX.Element
    label: string
    value: keyof typeof LANGUAGES
  }[] = [
    {
      icon: <SvgIcon component={UsIcon} viewBox={viewBox} />,
      label: 'english',
      value: 'en',
    },
    {
      icon: <SvgIcon component={RuIcon} viewBox={viewBox} />,
      label: 'русский',
      value: 'ru',
    },
  ]

  return { languageOptions }
}
