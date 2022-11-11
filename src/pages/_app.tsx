import type { AppProps } from 'next/app'
import { EmotionCacheProvider, MainStyles, ThemeProvider } from 'theme'
import StateManagerProvider from 'providers/StateManagerProvider'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <StateManagerProvider>
      <EmotionCacheProvider>
        <ThemeProvider>
          <MainStyles />
          <Component {...pageProps} />
        </ThemeProvider>
      </EmotionCacheProvider>
    </StateManagerProvider>
  )
}

export default MyApp
