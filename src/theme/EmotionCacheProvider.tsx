import type { FC } from 'react'
import { CacheProvider } from '@emotion/react'
import createCache from '@emotion/cache'
import { prefixer } from 'stylis'
import type { EmotionCacheProviderProps } from './index.d'

// Create cache
const cacheRtl = createCache({
  key: 'css',
  stylisPlugins: [prefixer],
  prepend: true,
})

const EmotionCacheProvider: FC<EmotionCacheProviderProps> = ({ children }) => {
  return (
    <CacheProvider value={cacheRtl}>
      {children}
    </CacheProvider>
  )
}

export default EmotionCacheProvider