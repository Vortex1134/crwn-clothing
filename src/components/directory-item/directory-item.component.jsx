import {
	BackgroundImage,
	Body,
	DirectoryItemContainer,
	Paragraph,
	Title,
} from './directory-item.styles'

import { Link } from 'react-router'

const DirectoryItem = ({ category }) => {
	const { imageUrl, title } = category
	return (
		<DirectoryItemContainer to={`/shop/${title.toLowerCase()}`}>
			<BackgroundImage
				style={{
					backgroundImage: `url(${imageUrl})`,
				}}
			/>
			<Body className='body'>
				<Title>{title}</Title>
				<Paragraph>Shop Now</Paragraph>
			</Body>
		</DirectoryItemContainer>
	)
}

export default DirectoryItem
