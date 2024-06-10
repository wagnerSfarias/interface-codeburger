import PropTypes from 'prop-types'
import React from 'react'
import { toast } from 'react-toastify'

import { useCart } from '../../hooks/CartContext'
import { Button } from '../Button'
import { Container, Image, ProductName, ProductPrice } from './styles'

export function CardProduct({ product }) {
  const { putProductInCart } = useCart()

  return (
    <Container>
      <Image src={product.url} alt={`produto ${product.name}`} />
      <div>
        <ProductName>{product.name}</ProductName>
        <ProductPrice>{product.formatedPrice}</ProductPrice>
        <Button
          isCard
          onClick={() => {
            putProductInCart(product)
            toast.success(`${product.name}, foi adicionado ao carrinho !`)
          }}
        >
          Adicionar
        </Button>
      </div>
    </Container>
  )
}

CardProduct.propTypes = {
  product: PropTypes.object
}
