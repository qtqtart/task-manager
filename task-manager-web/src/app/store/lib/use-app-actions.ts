import { bindActionCreators } from '@reduxjs/toolkit'
import { useMemo } from 'react'
import { useDispatch } from 'react-redux'

import { appActions } from './app-actions'

export function useAppActions() {
  const dispatch = useDispatch()

  return useMemo(() => bindActionCreators(appActions, dispatch), [dispatch])
}
