import styled from '@emotion/styled'


export const InputContainer = styled.div`
	padding-top: 8px;
	position: relative;
	cursor: text;
`

export const InputContent = styled.div`
	padding: 0 5px;
	border-radius: 5px;
	background-color: ${({ theme }) => theme.pallete.white};
	height: 28px;
	margin-top: -2px;
	display: flex;
	align-items: center;
	justify-content: center;
	padding: 2px 8px;
	gap: 4px;
	:focus {
		border: 1px solid ${({ theme }) => theme.pallete.black.lightest};
	}

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
	
	& {
		color: ${({ theme }) => theme.pallete.black.lightest};
	}

	:active, :focus {
		color: ${({ theme }) => theme.pallete.black.main};
		border: none;
		outline: none;
	}
`

export const ClearButton = styled.button`
	border: none;
	background-color: transparent;
	font-size: 1.5rem;
	border-radius: 7px;
	& {
		color: ${({ theme }) => theme.pallete.black.main};
	}
`