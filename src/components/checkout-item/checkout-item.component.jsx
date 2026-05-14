import {
	Arrow,
	CheckoutItemContainer,
	Image,
	ImageContainer,
	Name,
	Price,
	Quantity,
	RemoveButton,
	Value,
} from './checkout-item.styles'

import { useContext } from 'react'
import { CartContext } from '../../contexts/cart.context'

const CheckoutItem = ({ cartItem }) => {
	const { clearItemFromCart, addItemToCart, removeItemFromCart } =
		useContext(CartContext)
	const { name, imageUrl, price, quantity } = cartItem

	const decrementHandler = () => removeItemFromCart(cartItem)

	const incrementHandler = () => addItemToCart(cartItem)

	const clearItemHandler = () => clearItemFromCart(cartItem)

	return (
		<CheckoutItemContainer>
			<ImageContainer>
				<Image
					src={imageUrl}
					alt={`${name}`}
				/>
			</ImageContainer>
			<Name>{name}</Name>
			<Quantity>
				<Arrow onClick={decrementHandler}>&#10094;</Arrow>
				<Value>{quantity}</Value>
				<Arrow onClick={incrementHandler}>&#10095;</Arrow>
			</Quantity>
			<Price>{price}</Price>
			<RemoveButton onClick={clearItemHandler}>&#10005;</RemoveButton>
		</CheckoutItemContainer>
	)
}

export default CheckoutItem
