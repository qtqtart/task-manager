import { SvgIcon } from '@mui/material'
import { LANGUAGES } from '@shared/config/i18next/languages'
import { useTranslation } from 'react-i18next'

import RuIcon from '/public/icons/flags/ru.svg?react'
import UsIcon from '/public/icons/flags/us.svg?react'

export function useLanguageOptions() {
  const { t } = useTranslation()

  const viewBox = '0 0 20 15'

  const languageOptions = [
    {
      icon: <SvgIcon component={UsIcon} viewBox={viewBox} />,
      label: t('english'),
      value: LANGUAGES.en,
    },
    {
      icon: <SvgIcon component={RuIcon} viewBox={viewBox} />,
      label: t('russian'),
      value: LANGUAGES.ru,
    },
  ]

  return { languageOptions }
}
