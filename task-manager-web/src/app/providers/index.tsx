import { persistor, store } from '@app/store'
import { HomePage } from '@pages'
import { FC, Suspense } from 'react'
import { HelmetProvider } from 'react-helmet-async'
import { Provider as StoreProvider } from 'react-redux'
import { PersistGate as PersistStoreProvider } from 'redux-persist/integration/react'

import { ThemeProvider } from './theme-provider'

export const AppProvider: FC = () => {
  return (
    <HelmetProvider>
      <StoreProvider store={store}>
        <PersistStoreProvider persistor={persistor}>
          <Suspense>
            <ThemeProvider>
              <HomePage />
            </ThemeProvider>
          </Suspense>
        </PersistStoreProvider>
      </StoreProvider>
    </HelmetProvider>
  )
}
