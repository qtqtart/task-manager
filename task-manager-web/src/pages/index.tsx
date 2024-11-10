import { ChangeLanguage } from '@features/language'
import { ChangeThemeMode } from '@features/theme-mode'
import { Container, Stack } from '@mui/material'
import { FC } from 'react'

export const HomePage: FC = () => {
  return (
    <Container maxWidth='lg'>
      <Stack alignItems='center' flexDirection='row' gap={1}>
        <ChangeThemeMode />
        <ChangeLanguage />
      </Stack>
    </Container>
  )
}
