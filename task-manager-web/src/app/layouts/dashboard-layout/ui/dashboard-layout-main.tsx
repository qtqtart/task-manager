import { useDashboard } from '@features/dashboard'
import { Stack } from '@mui/material'
import { FC } from 'react'
import { Outlet } from 'react-router-dom'

export const DashboardLayoutMain: FC = () => {
  const { dashboardWidth } = useDashboard()

  return (
    <Stack
      component='main'
      sx={{
        flexGrow: 1,
        height: '100%',
        pl: {
          md: `${dashboardWidth}px`,
          xs: 0,
        },
        pt: 8,
        width: '100%',
      }}
    >
      <Outlet />
    </Stack>
  )
}
