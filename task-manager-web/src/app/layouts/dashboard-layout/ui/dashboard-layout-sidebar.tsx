import { useDashboard } from '@features/dashboard'
import { Drawer, Stack } from '@mui/material'
import { FC } from 'react'

export const DashboardLayoutSidebar: FC = () => {
  const { dashboardWidth, isOpenDashboard, onCloseDashboard } = useDashboard()

  return (
    <Drawer
      anchor='left'
      ModalProps={{
        keepMounted: false,
      }}
      onClose={onCloseDashboard}
      open
      variant='permanent'
    >
      <Stack
        sx={{
          alignItems: isOpenDashboard ? 'flex-start' : 'center',
          flexDirection: 'column',
          justifyContent: isOpenDashboard ? 'flex-start' : 'center',
          width: `${dashboardWidth}px`,
        }}
      >
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint animi molestias asperiores. Vel, ipsam voluptas.
        Nostrum aspernatur amet velit consectetur similique eius nihil minus aut sed, sapiente id corporis fugiat quo
        voluptate assumenda architecto ea. Incidunt magni porro enim sequi, natus ducimus commodi optio excepturi
        accusamus pariatur vel praesentium cum? Est obcaecati ratione, tenetur quaerat deleniti hic ea tempora magnam
        molestias dicta cumque optio provident consequatur fuga doloribus assumenda ipsum velit? Doloribus aspernatur
        cum vel modi hic sint, quo quod quam laudantium porro debitis, labore repellendus a qui vero quidem. Ipsum
        eligendi nesciunt asperiores eum aliquid ducimus eaque laborum adipisci?
      </Stack>
    </Drawer>
  )
}
