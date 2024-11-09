import { FormControl, MenuItem, PaletteMode, Select, Stack, Typography } from '@mui/material'
import { FC } from 'react'

import { useThemeMode } from '../lib/use-theme-mode'
import { useThemeModeOptions } from '../lib/use-theme-mode-options'

export const ChangeThemeMode: FC = () => {
  const { setThemeMode, themeMode } = useThemeMode()
  const { themeModeOptions } = useThemeModeOptions()

  return (
    <FormControl variant="outlined">
      <Select
        onChange={({ target }) => {
          setThemeMode(target.value as PaletteMode)
        }}
        value={themeMode}
      >
        {themeModeOptions.map(({ icon, label, value }) => (
          <MenuItem key={value} value={value}>
            <Stack alignItems="center" flexDirection="row" gap={1}>
              {icon}
              <Typography textTransform="capitalize" variant="body2">
                {label}
              </Typography>
            </Stack>
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  )
}
