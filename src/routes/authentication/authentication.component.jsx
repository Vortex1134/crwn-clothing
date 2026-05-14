import {
	AuthenticationContainer,
	FormsContainer,
} from './authentication.styles'

import SigninForm from '../../components/signin-form/signin-form.component'
import SignupForm from '../../components/signup-form/signup-form.component'

const Authentication = () => {
	return (
		<AuthenticationContainer>
			<h2>Sign In</h2>
			<FormsContainer>
				<SigninForm />
				<SignupForm />
			</FormsContainer>
		</AuthenticationContainer>
	)
}

export default Authentication
