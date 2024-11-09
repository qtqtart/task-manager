import { TypedUseSelectorHook } from 'react-redux'
import { useSelector } from 'react-redux'

import { AppState } from '../model/types'

export const useAppSelector: TypedUseSelectorHook<AppState> = useSelector
