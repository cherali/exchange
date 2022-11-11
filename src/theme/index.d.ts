import type { ReactNode } from 'react'

declare module '@emotion/react' {
  export interface Theme extends ITheme { }
}

export interface EmotionCacheProviderProps {
  children: ReactNode;
}

export interface ThemeProviderProps {
  children: ReactNode;
}

interface IColor {
  main: string;
  light?: string;
  lightest?: string;
  dark?: string;
  darkest?: string;
}

export interface IPallete {
  primary: IColor;
  white: string;
  black: IColor;
  gray: IColor;
  green: IColor;
  red: IColor;
}

export interface ITheme {
  pallete: IPallete;
}
