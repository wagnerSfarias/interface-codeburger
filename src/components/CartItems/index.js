import React from 'react'

import { useCart } from '../../hooks/CartContext'
import { useUser } from '../../hooks/UserContext'
import formatCurrency from '../../utils/formatCurrency'
import { Container, Header, Body, EmpyCart } from './styles'

export function CartItems() {
  const { cartProducts, increaseProducts, decreaseProducts } = useCart()
  const { userData } = useUser()

  const filteredProducts = cartProducts.filter(
    data => data.userId === userData.id
  )

  return (
    <Container>
      <Header>
        <p></p>
        <p>Itens</p>
        <p>Preço</p>
        <p>Quantidade</p>
        <p>Total</p>
      </Header>

      {filteredProducts && filteredProducts.length > 0 ? (
        filteredProducts.map(product => (
          <Body key={product.id}>
            <img src={product.url} />
            <p>{product.name}</p>
            <p>{formatCurrency(product.price)}</p>
            <div className="quantity-container">
              <button onClick={() => decreaseProducts(product.id)}>-</button>
              <p>{product.quantity}</p>
              <button onClick={() => increaseProducts(product.id)}>+</button>
            </div>
            <p>{formatCurrency(product.quantity * product.price)}</p>
          </Body>
        ))
      ) : (
        <EmpyCart>Carrinho vazio</EmpyCart>
      )}
    </Container>
  )
}
