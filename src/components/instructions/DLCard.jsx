import React from 'react'
import { 
    Card, 
    CardHeader, 
    CardBody, 
    CardFooter,
	Heading,
	Text,
    Button,
    SimpleGrid,
} from '@chakra-ui/react'

const DLCard = (props) => {
	const cards = props.cards;

	return (
		<body>
			<SimpleGrid 
				spacing={4} 
				templateColumns='repeat(auto-fill, minmax(200px, 1fr))' 
				marginTop='50px' 
				marginBottom='50px'
				marginLeft='200px'
				justifyContent='center'
				alignItems='center'
				textAlign='center'
			>
			{cards.map((cards) => (
			<Card>
				<CardHeader>
				<Heading size='md'>{ cards.heading }</Heading>
				</CardHeader>
				<CardBody>
				<Text>{ cards.description }</Text>
				</CardBody>
				<CardFooter justifyContent='center'>
				<Button as="a" href= { cards.buttonLink } colorScheme= { cards.buttonColor }>{ cards.buttonText }</Button>
				</CardFooter>
			</Card>
			))}
		</SimpleGrid>
		</body>
	)
}

export default DLCard