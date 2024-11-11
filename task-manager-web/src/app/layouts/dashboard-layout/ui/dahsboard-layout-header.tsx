import { useDashboard } from '@features/dashboard'
import { AccountCircle as AccountCircleIcon, Menu as MenuIcon } from '@mui/icons-material'
import { AppBar, IconButton, Stack, Toolbar, useTheme } from '@mui/material'
import { FC } from 'react'

export const DashboardLayoutHeader: FC = () => {
  const { zIndex } = useTheme()
  const { onCloseDashboard } = useDashboard()

  return (
    <AppBar
      position='fixed'
      sx={{
        width: '100%',
        zIndex: zIndex.drawer + 1,
      }}
    >
      <Toolbar
        component={Stack}
        sx={{
          alignItems: 'center',
          flexDirection: 'row',
          justifyContent: 'space-between',
          padding: 1,
        }}
      >
        <IconButton onClick={onCloseDashboard}>
          <MenuIcon />
        </IconButton>

        <IconButton>
          <AccountCircleIcon />
        </IconButton>
      </Toolbar>
    </AppBar>
  )
}
