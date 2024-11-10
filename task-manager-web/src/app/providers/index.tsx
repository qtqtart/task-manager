import { persistor, store } from '@app/store'
import { HomePage } from '@pages'
import { FC, Suspense } from 'react'
import { HelmetProvider } from 'react-helmet-async'
import { Provider as StoreProvider } from 'react-redux'
import { PersistGate as PersistStoreProvider } from 'redux-persist/integration/react'

import { ErrorBoundary } from './error-boundary'
import { ThemeProvider } from './theme-provider'

export const AppProvider: FC = () => {
  return (
    <HelmetProvider>
      <StoreProvider store={store}>
        <PersistStoreProvider persistor={persistor}>
          <Suspense>
            <ThemeProvider>
              <ErrorBoundary>
                <HomePage />
              </ErrorBoundary>
            </ThemeProvider>
          </Suspense>
        </PersistStoreProvider>
      </StoreProvider>
    </HelmetProvider>
  )
}
