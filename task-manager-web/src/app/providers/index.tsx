import { persistor, store } from '@app/store'
import { HomePage } from '@pages'
import { FC } from 'react'
import { HelmetProvider } from 'react-helmet-async'
import { Provider as StoreProvider } from 'react-redux'
import { PersistGate as PersistStoreProvider } from 'redux-persist/integration/react'

export const AppProvider: FC = () => {
  return (
    <HelmetProvider>
      <StoreProvider store={store}>
        <PersistStoreProvider persistor={persistor}>
          <HomePage />
        </PersistStoreProvider>
      </StoreProvider>
    </HelmetProvider>
  )
}
