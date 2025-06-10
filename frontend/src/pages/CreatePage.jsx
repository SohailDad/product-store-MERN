import { Container } from '@chakra-ui/react';
import React, { useState } from 'react'

export default function CreatePage() {
    const [newProduct, setNewProduct] = useState({
        name: '',
        price: '',
        image: ''
    });
  return (
    <Container>CreatePage</Container>
  )
}
