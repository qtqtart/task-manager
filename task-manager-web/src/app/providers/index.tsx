import { router } from '@app/router'
import { persistor, store } from '@app/store'
import { FC, Suspense } from 'react'
import { HelmetProvider } from 'react-helmet-async'
import { Provider as StoreProvider } from 'react-redux'
import { RouterProvider } from 'react-router-dom'
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
                <RouterProvider router={router} />
              </ErrorBoundary>
            </ThemeProvider>
          </Suspense>
        </PersistStoreProvider>
      </StoreProvider>
    </HelmetProvider>
  )
}
