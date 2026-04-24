import {
	signInWithGooglePopup,
	createUserDocumentFromAuth,
} from '../../utils/firebase/firebase.utils'

import SignupForm from '../../components/signup-form/signup-form.component'

const SignIn = () => {
	const logGoogleUser = async () => {
		const { user } = await signInWithGooglePopup()
		const userDocRef = await createUserDocumentFromAuth(user)
	}

	return (
		<div>
			<h2>Sign In</h2>
			<button onClick={logGoogleUser}>Sign in with Google Popup</button>
            <SignupForm />
            <p>
                Already have an account? Click here to sign in.
            </p>
		</div>
	)
}

export default SignIn
