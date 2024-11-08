import { appReducer } from '../lib/app-reducer'
import { store } from '../lib/store'

export type AppState = ReturnType<typeof appReducer>
export type AppDispatch = typeof store.dispatch
