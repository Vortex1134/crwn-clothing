import { BaseButton, GoogleSignInButton, InvertedButton } from './button.styles'

export const BUTTON_TYPE_CLASSES = {
	base: 'base',
	google: 'google-sign-in',
	inverted: 'inverted',
}

const BUTTON_MAP = {
	[BUTTON_TYPE_CLASSES.base]: BaseButton,
	[BUTTON_TYPE_CLASSES.google]: GoogleSignInButton,
	[BUTTON_TYPE_CLASSES.inverted]: InvertedButton,
}

const Button = ({ children, buttonType, ...otherProps }) => {
	const CustomButton = BUTTON_MAP[buttonType] || BUTTON_MAP.base
	return <CustomButton {...otherProps}>{children}</CustomButton>
}

export default Button
