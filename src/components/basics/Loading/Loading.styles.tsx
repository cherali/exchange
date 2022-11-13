import styled from '@emotion/styled'
import { keyframes } from '@emotion/react'
import { IPallete } from 'theme/index.d'
import type { LoadingColorProps } from './index.d'

const colorMap: Record<LoadingColorProps, keyof Omit<IPallete, 'white'>> = {
  primary: 'green',
  danger: 'red',
}

const rotate = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`

export const LoadingContainer = styled.div<{ color: LoadingColorProps }>`
  display: inline-block;
  width: 45px;
  height: 45px;
  :after {
    content: " ";
    display: block;
    width: 30;
    height: 30px;
    border: 4px solid ${({ theme, color = 'primary' }) => theme.pallete[colorMap[color]].main};
    border-color: ${({ theme, color = 'primary' }) => theme.pallete[colorMap[color]].main}
    transparent 
    ${({ theme, color = 'primary' }) => theme.pallete[colorMap[color]].main}
    transparent;
    margin: 4px;
    border-radius: 50%;
    animation: ${rotate} 1.2s linear infinite;
  }
  `
