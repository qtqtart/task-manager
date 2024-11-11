import { useAppActions, useAppSelector } from '@app/store'
import { useCallback } from 'react'

export function useDashboard() {
  const { isOpenDashboard } = useAppSelector(({ dashboard }) => dashboard)
  const { toggleIsOpenDashboard } = useAppActions()

  const dashboardWidth = isOpenDashboard ? 80 : 320

  const onCloseDashboard = useCallback(() => {
    toggleIsOpenDashboard()
  }, [toggleIsOpenDashboard])

  return {
    dashboardWidth,
    isOpenDashboard,
    onCloseDashboard,
  }
}
