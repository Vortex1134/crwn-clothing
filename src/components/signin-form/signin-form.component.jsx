import {
	SigninContainer,
	Title,
	MultipleButtonContainer,
} from './signin-form.styles'

import { useState } from 'react'

import {
	signInAuthUserWithEmailAndPassword,
	createUserDocumentFromAuth,
	signInWithGooglePopup,
} from '../../utils/firebase/firebase.utils'

import FormInput from '../form-input/form-input.component'
import Button, { BUTTON_TYPE_CLASSES } from '../button/button.component'

const defaultFormFields = {
	email: '',
	password: '',
}

const SigninForm = () => {
	const [formFields, setFormFields] = useState(defaultFormFields)
	const { email, password } = formFields

	const handleChange = (event) => {
		const { name, value } = event.target
		setFormFields({ ...formFields, [name]: value })
	}

	const resetFormFields = () => {
		setFormFields(defaultFormFields)
	}

	const signInWithGoogle = async () => {
		try {
			await signInWithGooglePopup()
			resetFormFields()
		} catch (error) {
			console.error(error)
		}
	}

	const handleSubmit = async (event) => {
		event.preventDefault()

		try {
			const { user } = await signInAuthUserWithEmailAndPassword(
				email,
				password,
			)

			resetFormFields()
		} catch (error) {
			switch (error.code) {
				case 'auth/invalid-credential':
					alert('Invalid credentials')
					break
				default:
					alert(error)
					break
			}
		}
	}

	return (
		<SigninContainer>
			<Title>Already have an account?</Title>
			<span>Sign in with your email and password</span>
			<form onSubmit={handleSubmit}>
				<FormInput
					label='Email'
					type='email'
					name='email'
					value={email}
					required
					onChange={handleChange}
				/>
				<FormInput
					label='Password'
					type='password'
					name='password'
					value={password}
					required
					onChange={handleChange}
				/>
				<MultipleButtonContainer>
					<Button type='submit'>Sign In</Button>
					<Button
						type='button'
						onClick={signInWithGoogle}
						buttonType={BUTTON_TYPE_CLASSES.google}>
						Google Sign In
					</Button>
				</MultipleButtonContainer>
			</form>
		</SigninContainer>
	)
}

export default SigninForm
