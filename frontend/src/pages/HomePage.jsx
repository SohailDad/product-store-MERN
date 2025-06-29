import React, { useEffect } from 'react'
import { Container, SimpleGrid, Text, VStack } from '@chakra-ui/react'
import { Link } from 'react-router-dom'
import { use } from 'react'
import { useProductStore } from '../store/product'
import ProductCards from '../components/ProductCards'

function HomePage() {
  const {fetchProducts,products} = useProductStore();

  useEffect(() => {
    fetchProducts();    
  }
  ,[fetchProducts]);

  return (
    <Container maxW="container.xl" py={12}>
        <VStack spacing={8}>
            <Text
                fontWeight={'bold'}
                textTransform={'uppercase'}
                textAlign={'center'}
                bgGradient={'linear(to-r, cyan.400, blue.500)'}
                bgClip={'text'}
        >
          Current Products 🚀
        </Text>

        <SimpleGrid 
          columns={{ base: 1, md: 2, lg: 3 }}
          spacing={10}
          w={'full'}
        >
            {products.map((product)=> (
                  <ProductCards key={product._id} product={product}/>
            ))
            }
        </SimpleGrid>

        <Text fontSize='xl' textAlign={"center"} fontWeight='bold' color='gray.500'>
          No products found 😢
						<Link to={"/create"}>
							<Text as='span' color='blue.500' _hover={{ textDecoration: "underline" }}>
								Create a product
							</Text>
						</Link>
        </Text>
        </VStack>
    </Container>
  )
}

export default HomePage