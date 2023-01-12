import { FC, useEffect } from 'react'
import { BinanceClient } from "ccxws-client"
import { SocketContext } from './SocketProviderContext'
import type { SocketProviderProps, SubscribeTicker, UnSubscribeTicker } from './index.d'

const SocketProvider: FC<SocketProviderProps> = ({ children }) => {
  const binance = new BinanceClient()

  const subscribeTicker: SubscribeTicker = (market, tickers, handler) => {
    binance.setMarketMap(tickers);
    binance.on("ticker", handler)
    binance.subscribeTicker(market)
  }

  const unsubscribeTicker: UnSubscribeTicker = (market) => {
    binance.unsubscribeTicker(market)
  }


  useEffect(() => {
    return () => {
      binance.close()
    }
  }, [])


  return (
    <SocketContext.Provider value={{
      subscribeTicker,
      unsubscribeTicker,
    }} >
      {children}
    </SocketContext.Provider>
  )
}

export default SocketProvider