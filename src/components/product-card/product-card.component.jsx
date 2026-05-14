import {
	AddButton,
	Footer,
	Name,
	Price,
	ProductCardContainer,
	ProductImage,
} from './product-card.styles'

import { useContext } from 'react'
import { CartContext } from '../../contexts/cart.context'

import { BUTTON_TYPE_CLASSES } from '../button/button.component'

const ProductCard = ({ product }) => {
	const { name, price, imageUrl } = product
	const { addItemToCart } = useContext(CartContext)

	const addProductToCart = () => addItemToCart(product)

	return (
		<ProductCardContainer>
			<ProductImage
				src={imageUrl}
				alt={`${name}`}
			/>
			<Footer>
				<Name>{name}</Name>
				<Price>{price}</Price>
			</Footer>
			<AddButton
				buttonType={BUTTON_TYPE_CLASSES.inverted}
				onClick={addProductToCart}>
				Add To Cart
			</AddButton>
		</ProductCardContainer>
	)
}

export default ProductCard
