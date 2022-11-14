import { keyframes } from '@emotion/react'
import styled from '@emotion/styled'
import { Color, CaretDirection } from './index.d'

const fade = (color: any) => keyframes`
  form {
    background-color: ${color};
  }
  to {
    background-color: transparent;
    border-color: transparent;
  }
`

export const StyledPrice = styled.span<{ color: Color }>`
  background-color: ${({ theme, color }) => theme.pallete[color].lightest};
  padding: 10px;
  border-radius: 4px;
  display: inline-flex;
  gap: 8px;
  align-items: center;
  animation: ${({ theme, color }) => fade(theme.pallete[color].lightest)} 500ms ease-out 1 forwards;
`



export const Caret = styled.span<{ arrowDirection: CaretDirection, color: Color }>`
  width: 0;
  height: 0;
  display: inline-block;
  border: 5px solid transparent;
  position: relative;
  animation: ${({ theme, color }) => fade(theme.pallete[color].lightest)} 500ms ease-out 1 forwards;
  
  ${p => p.arrowDirection === 'down' && `
    border-top-color: ${p.theme.pallete[p.color].main};
    top: 4px;
  `}

  ${p => p.arrowDirection === 'up' && `
    border-bottom-color: ${p.theme.pallete[p.color].main};
    top: -2px;
  `}
`