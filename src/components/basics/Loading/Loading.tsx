import type { FC } from 'react'
import { LoadingContainer } from './Loading.styles'
import type { LoadingProps } from './index.d'

// TODO: add size
const Loading: FC<LoadingProps> = ({ color = 'primary' }) => {
	return <LoadingContainer color={color} />
}

export default Loading
