import type { ReactNode } from 'react'
import type { IPallete } from 'theme/index.d'

export type Color = keyof Omit<IPallete, 'white'>
export type CaretDirection = 'up' | 'down'

export interface PriceProps {
  children: ReactNode | string | number;
}

export interface PriceRecord {
  color: Color;
  direction: CaretDirection;
}