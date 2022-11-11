import type { FC } from 'react'
import { ThemeProvider as EmotionThemeProvider } from '@emotion/react'
import { pallete } from './pallete'
import type { ITheme, ThemeProviderProps } from './index.d'

const theme: ITheme = {
  pallete
}

const ThemeProvider: FC<ThemeProviderProps> = ({ children }) => {
  return (
    <EmotionThemeProvider theme={theme} >
      {children}
    </EmotionThemeProvider>
  )
}

export default ThemeProvider