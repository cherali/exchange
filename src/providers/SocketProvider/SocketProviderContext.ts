import { createContext } from 'react'
import type { SocketContextProps } from './index.d'

const emptyFunction = () => { }

export const SocketContext = createContext<SocketContextProps>({
  subscribeTicker: emptyFunction,

  unsubscribeTicker: emptyFunction,
})
