import { Box, Heading, HStack, IconButton, Image, Text, useColorModeValue } from '@chakra-ui/react'
import { DeleteIcon, EditIcon } from "@chakra-ui/icons";

function ProductCards({ product }) {
    const textColor = useColorModeValue('gray.600', 'gray.200');
    const bgColor = useColorModeValue('white', 'gray.800');
    return (
        <Box
            shadow={"lg"}
            rounded={"lg"}
            overflow={'hidden'}
            transition={'all 0.3s '}
            _hover={{ transform: 'translateY(-5px)', shadow: 'xl' }}
            bg={bgColor}
        >
            <Image
                src={product.imageUrl}
                alt={product.name}
                w={'full'}
                h={48}
                objectFit={'cover'}
            />

            <Box p={4}>
                <Heading as={"h3"} size={'md'} mb={2}>
                    {product.name}
                </Heading>

                <Text fontWeight={'bold'} fontSize={"xl"} color={"textColor"} mb={4}>
                    ${product.price}     
                </Text>
                <HStack spacing={2}>
					<IconButton icon={<EditIcon />} colorScheme='blue' />
					<IconButton
						icon={<DeleteIcon />}
						colorScheme='red'
					/>
				</HStack>
            </Box>
        </Box>
    )
}

export default ProductCards