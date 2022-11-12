import styled from '@emotion/styled'


export const InputContainer = styled.div`
	padding-top: 8px;
	position: relative;
	cursor: text;
`

export const InputContent = styled.div`
	padding: 0 5px;
	border: 1px solid red;
	border-radius: 5px;
	height: 28px;
	margin-top: -2px;
	display: flex;
	align-items: center;
	justify-content: center;
	gap: 4px;
`

export const LabelStyle = styled.label`
	position: absolute;
	top: 0;
	left: 8px;
	padding: 0 2px;
	background-color: ${({ theme }) => theme.pallete.white};
`

export const InputStyle = styled.input`
	border: none;
	height: 100%;
	background: transparent;
	margin: -2px auto 0;
	font-size: 1.1rem;
	width: 100%;

	:active, :focus {
		border: none;
		outline: none;
	}
`