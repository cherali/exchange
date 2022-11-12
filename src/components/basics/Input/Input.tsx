import { FC, useRef } from 'react'
import { InputContainer, InputContent, InputStyle, LabelStyle } from './Input.styles'
import type { InputProps } from './index.d'

// TODO: add size
const Input: FC<InputProps> = ({
	label,
	value,
	onChange,
	type = 'input',
	placeholder,
	disabled = false,
	autoComplete = false,
	startIcon,
	endIcon,
	...rest
}) => {
	const ref = useRef<HTMLInputElement>(null)

	const onClick = () => ref?.current?.focus()

	return (
		<InputContainer
			onClick={onClick}
		>
			<InputContent
				onClick={onClick}
			>
				{label && <LabelStyle onClick={onClick}>
					{label}
				</LabelStyle>}

				{startIcon}

				<InputStyle
					ref={ref}
					value={value}
					type={type}
					disabled={disabled}
					autoComplete={autoComplete.toString()}
					placeholder={placeholder}
					{...rest}
				/>

				{endIcon}

			</InputContent>
		</InputContainer>
	)
}

export default Input
