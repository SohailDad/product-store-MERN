import { Box, Button, Container, Heading, useColorModeValue, VStack } from '@chakra-ui/react';
import React, { useState } from 'react'

export default function CreatePage() {
    const [newProduct, setNewProduct] = useState({
        name: '',
        price: '',
        image: ''
    });

    const handleAddProduct = () => {
        console.log('New Product:', newProduct);
    }
    return (
        <Container maxW={"container.sm"}>
            <VStack spacing={8}>
                <Heading as={'h1'} size={'2xl'} textAlign={'center'} mt={8}>
                    Create New Product
                </Heading>
                <Box w={'full'} bg={useColorModeValue('white', 'gray.800')} p={6} rounded={'lg'} Shadow={'md'}>
                    <VStack spacing={4}>
                            <input 
                                placeholder='Product Name'
                                name='name'
                                value={newProduct.name} 
                                onChange={(e) => setNewProduct({ ...newProduct, name: e.target.value })}
                            />
                            <input 
                                placeholder='Product Price'
                                price='price'
                                value={newProduct.price} 
                                onChange={(e) => setNewProduct({ ...newProduct, price: e.target.value })}
                            />
                            <input 
                                placeholder='Product Image URL'
                                image='image'
                                value={newProduct.image} 
                                onChange={(e) => setNewProduct({ ...newProduct, image: e.target.value })}
                            />
                            <Button colorScheme='blue' onClick={handleAddProduct} w={'full'}>
                                Add Product
                            </Button>

                    </VStack>
                    
                </Box>
            </VStack>
        </Container>
    )
}
