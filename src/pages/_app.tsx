import type { AppProps } from 'next/app'
import { EmotionCacheProvider, MainStyles, ThemeProvider } from 'theme'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <EmotionCacheProvider>
      <ThemeProvider>
        <MainStyles />
        <Component {...pageProps} />
      </ThemeProvider>
    </EmotionCacheProvider>
  )
}

export default MyApp
