import type { FC } from 'react'
import { Provider } from 'react-redux'
import { store } from 'store'
import type { StateManagerProviderProps } from './index.d'

const StateManagerProvider: FC<StateManagerProviderProps> = ({ children }) => {
  return (
    <Provider store={store}>
      {children}
    </Provider>
  )
}

export default StateManagerProvider
