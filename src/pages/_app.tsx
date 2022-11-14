import type { AppProps } from 'next/app'
import { EmotionCacheProvider, MainStyles, ThemeProvider } from 'theme'
import StateManagerProvider from 'providers/StateManagerProvider'
import dynamic from 'next/dynamic'

const SocketProvider = dynamic(() => import('providers/SocketProvider'))

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <StateManagerProvider>
      <EmotionCacheProvider>
        <ThemeProvider>
          <MainStyles />
          <SocketProvider >
            <Component {...pageProps} />
          </SocketProvider>
        </ThemeProvider>
      </EmotionCacheProvider>
    </StateManagerProvider>
  )
}

export default MyApp
