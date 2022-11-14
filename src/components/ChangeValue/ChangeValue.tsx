import type { FC } from 'react'
import type { ChangeValueProps, SignType, StyledChangeValueColor } from './index.d'
import { StyledChangeValue } from './ChangeValue.styles'


const getColor = (num: string, defaultColor: StyledChangeValueColor, sign: SignType): StyledChangeValueColor => {
  const number = Number(num?.toString().match(/\d/g)?.join(''))

  let color = defaultColor

  if (number === 0) {
    return color
  }

  return sign === '-' ? 'red' : 'green'

}

const getSign = (num: string): SignType => {
  const first = num?.toString()?.[0]

  switch (first) {
    case '+':
      return '+'
    case '-':
      return '-'
    default:
      return ''
  }
}

const ChangeValue: FC<ChangeValueProps> = ({ children }) => {

  const sign = getSign(children)


  return (
    <StyledChangeValue color={getColor(children, 'black', sign)}>{children}%</StyledChangeValue>
  )
}

export default ChangeValue