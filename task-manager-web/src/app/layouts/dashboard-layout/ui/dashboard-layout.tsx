import { Stack } from '@mui/material'
import { FC } from 'react'

import { DashboardLayoutHeader } from './dahsboard-layout-header'
import { DashboardLayoutMain } from './dashboard-layout-main'
import { DashboardLayoutSidebar } from './dashboard-layout-sidebar'

export const DashboardLayout: FC = () => {
  return (
    <Stack
      sx={{
        height: '100%',
        padding: 1,
        width: '100%',
      }}
    >
      <DashboardLayoutHeader />
      <DashboardLayoutSidebar />
      <DashboardLayoutMain />
    </Stack>
  )
}
