import styled from '@emotion/styled'
import type { StyledChangeValueColor } from './index.d'

export const StyledChangeValue = styled.span<{ color: StyledChangeValueColor }>`
  color: ${({ theme, color = 'black' }) => theme.pallete[color].main};
`