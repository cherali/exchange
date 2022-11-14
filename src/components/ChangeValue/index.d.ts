import type { ReactNode } from 'react'
import type { IPallete } from 'theme/index.d'

export interface ChangeValueProps {
  children: string;
}


export type StyledChangeValueColor = keyof Omit<IPallete, 'white'>

export type SignType = '+' | '' | '-'