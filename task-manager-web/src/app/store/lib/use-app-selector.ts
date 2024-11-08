import { AppState } from '../model/types'
import { TypedUseSelectorHook } from 'react-redux'
import { useSelector } from 'react-redux'

export const useAppSelector: TypedUseSelectorHook<AppState> = useSelector
