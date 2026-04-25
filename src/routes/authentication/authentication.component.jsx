import './authentication.styles.scss'

import SigninForm from '../../components/signin-form/signin-form.component'
import SignupForm from '../../components/signup-form/signup-form.component'

const Authentication = () => {
	return (
		<div className='authentication-container'>
			<h2>Sign In</h2>
			<div className='forms-container'>
				<SigninForm />
				<SignupForm />
			</div>
		</div>
	)
}

export default Authentication
