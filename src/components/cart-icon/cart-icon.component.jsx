import './cart-icon.styles.scss'

import { useContext } from 'react'
import { CartContext } from '../../contexts/cart.context'

import ShoppingBag from '../../assets/shopping-bag.svg?react'

const CartIcon = () => {
	const { isCartOpen, setIsCartOpen } = useContext(CartContext)

	const toggleIsCartOpen = () => setIsCartOpen(!isCartOpen)

	return (
		<div
			className='cart-icon-container'
			onClick={toggleIsCartOpen}>
			<ShoppingBag className='shopping-icon' />
			<span className='item-count'>0</span>
		</div>
	)
}

export default CartIcon
