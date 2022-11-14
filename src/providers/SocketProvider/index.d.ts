import type { ReactNode } from 'react'

export interface SocketProviderProps {
  children: ReactNode;
}

export interface SocketMarketItem {
  id: string;
  base: string;
  quote: string;
}


export type SubscribeTicker = <T extends object>(market: SocketMarketItem, handler: (args: Array<T>, market: any) => void) => void

export type UnSubscribeTicker = (market: SocketMarketItem) => void

export interface SocketContextProps {
  subscribeTicker: SubscribeTicker,

  unsubscribeTicker: UnSubscribeTicker,
}
