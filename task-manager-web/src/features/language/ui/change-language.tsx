import { FormControl, MenuItem, Select, Stack, Typography } from '@mui/material'
import { FC } from 'react'
import { useTranslation } from 'react-i18next'

import { useLanguageOptions } from '../lib/use-language-options'

export const ChangeLanguage: FC = () => {
  const { i18n } = useTranslation()
  const { languageOptions } = useLanguageOptions()

  return (
    <FormControl variant='outlined'>
      <Select
        onChange={({ target }) => {
          i18n.changeLanguage(target.value)
        }}
        value={i18n.language}
      >
        {languageOptions.map(({ icon, label, value }) => (
          <MenuItem key={value} value={value}>
            <Stack alignItems='center' flexDirection='row' gap={1}>
              {icon}
              <Typography textTransform='capitalize' variant='body2'>
                {label}
              </Typography>
            </Stack>
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  )
}
