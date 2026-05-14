import {
	CartDropdownContainer,
	CartItems,
	CheckoutButton,
} from './cart-dropdown.styles'

import { useContext } from 'react'
import { CartContext } from '../../contexts/cart.context'

import { useNavigate } from 'react-router'

import CartItem from '../cart-item/cart-item.component'
import Button from '../button/button.component'

const CartDropdown = () => {
	const { cartItems, setIsCartOpen } = useContext(CartContext)
	const navigate = useNavigate()

	const goToCheckoutHandler = () => {
		setIsCartOpen(false)
		navigate('/checkout')
	}

	return (
		<CartDropdownContainer>
			<CartItems>
				{cartItems.map((item) => (
					<CartItem
						key={item.id}
						cartItem={item}
					/>
				))}
			</CartItems>
			<CheckoutButton onClick={goToCheckoutHandler}>
				Go To Checkout
			</CheckoutButton>
		</CartDropdownContainer>
	)
}

export default CartDropdown
