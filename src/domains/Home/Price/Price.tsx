import { FC, useEffect, useMemo, useState } from 'react'

import type { PriceProps, PriceRecord } from './index.d'
import { Caret, StyledPrice } from './Price.styles'

const rasingPrice: PriceRecord = {
  color: 'green',
  direction: 'up'
}

const fallingPrice: PriceRecord = {
  color: 'red',
  direction: 'down'
}


const Price: FC<PriceProps> = ({ children }) => {
  const [prevValue, setPrevValue] = useState<any>()
  const [priceValues, setPriceValues] = useState<PriceRecord>(rasingPrice)

  useEffect(() => {
    const color = children && children >= (prevValue || 0) ? rasingPrice : fallingPrice

    setPrevValue(children)
    setPriceValues(color)
  }, [children])


  const PriceCmp = useMemo(() => () => (
    <StyledPrice stopAnimation={prevValue === undefined || prevValue == 0} color={priceValues.color}>
      {children}
      <Caret stopAnimation={prevValue === undefined || prevValue == 0} arrowDirection={priceValues.direction} color={priceValues.color} />
    </StyledPrice>
  ), [prevValue])

  return <PriceCmp />
}

export default Price