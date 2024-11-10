import { useAppActions, useAppSelector } from '@app/store'

export function useDashboard() {
  const { isOpenDashboard } = useAppSelector(({ dashboard }) => dashboard)
  const { toggleIsOpenDashboard } = useAppActions()

  return {
    isOpenDashboard,
    toggleIsOpenDashboard,
  }
}
