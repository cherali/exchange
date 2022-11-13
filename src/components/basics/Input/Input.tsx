import { FC, useCallback, useRef, useState } from 'react'
import { ClearButton, InputContainer, InputContent, InputStyle, LabelStyle } from './Input.styles'
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
	clearable = false,
	...rest
}) => {
	const ref = useRef<HTMLInputElement>(null)
	const [focused, setFocused] = useState<boolean>(false)

	const onClick = () => ref?.current?.focus()


	const handleClear = useCallback((evt: any) => {
		evt.preventDefault()
		evt.stopPropagation()
		onChange({ ...evt, target: { value: '' } })
	}, [])

	const handleFocused = useCallback(() => setTimeout(() => setFocused(true)), [])
	const handleBlured = useCallback(() => setTimeout(() => setFocused(false), 200), [])

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
					onChange={onChange}
					onFocus={handleFocused}
					onBlur={handleBlured}
					{...rest}
				/>

				{endIcon}

				{clearable && focused && <ClearButton onClick={handleClear}>×</ClearButton>}

			</InputContent>
		</InputContainer>
	)
}

export default Input
