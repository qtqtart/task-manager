import { ThrowErrorButton } from '@app/providers/error-boundary'
import { useDashboard } from '@features/dashboard'
import { ChangeLanguage } from '@features/language'
import { ChangeThemeMode } from '@features/theme-mode'
import { Container, Stack, Typography } from '@mui/material'
import { FC } from 'react'

export const HomePage: FC = () => {
  const { isOpenDashboard } = useDashboard()

  return (
    <Container maxWidth='lg'>
      <Stack alignItems='center' flexDirection='row' gap={1}>
        <ChangeThemeMode />
        <ChangeLanguage />

        <ThrowErrorButton />

        <Typography variant='body1'>{isOpenDashboard ? 'Dashboard is open' : 'Dashboard is closed'}</Typography>
      </Stack>
    </Container>
  )
}
