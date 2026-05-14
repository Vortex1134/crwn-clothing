import styled, { css } from 'styled-components'

const sub = 'grey'
const main = 'black'

export const shrinkLabelStyles = css`
	top: -14px;
	font-size: 12px;
	color: ${main};
`

export const FormLabel = styled.label`
	color: ${sub};
	font-size: 16px;
	font-weight: normal;
	position: absolute;
	pointer-events: none;
	left: 5px;
	top: 10px;
	transition: 300ms ease all;

	${({ shrink }) => shrink && shrinkLabelStyles}
`

export const FormGroup = styled.div`
	position: relative;
	margin: 45px 0;
`

export const Input = styled.input`
	background: none;
	background-color: white;
	color: ${sub};
	font-size: 18px;
	padding: 10px 10px 10px 5px;
	display: block;
	width: 100%;
	border: none;
	border-radius: 0;
	border-bottom: 1px solid ${sub};
	margin: 25px 0;

	&:focus {
		outline: none;
	}

	&[type='password'] {
		letter-spacing: 0.3em;
	}

	&:focus ~ ${FormLabel} {
		${shrinkLabelStyles}
	}
`
