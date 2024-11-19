import { appReducer } from '../lib/app-reducer'
import { appStore } from '../lib/app-store'

export type AppState = ReturnType<typeof appReducer>
export type AppDispatch = typeof appStore.dispatch
