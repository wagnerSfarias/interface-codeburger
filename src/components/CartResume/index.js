import React, { useState, useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import { toast } from 'react-toastify'

import { useCart } from '../../hooks/CartContext'
import api from '../../services/api'
import formatCurrency from '../../utils/formatCurrency'
import { Button } from '../Button'
import { ContainerResume, Container } from './styles'

export function CartResume() {
  const [finalPrice, setFinalPrice] = useState(0)
  const [deliveryTax] = useState(5)
  const history = useHistory()
  const { cartProducts, deleteAllProducts } = useCart()

  useEffect(() => {
    const sumAllItems = cartProducts.reduce((acc, current) => {
      return current.price * current.quantity + acc
    }, 0)
    setFinalPrice(sumAllItems)
  }, [cartProducts])

  const submitOrder = async () => {
    const order = cartProducts.map(prodcut => {
      return { id: prodcut.id, quantity: prodcut.quantity }
    })
    try {
      const { status } = await api.post(
        'orders',
        { products: order },
        { validateStatus: () => true }
      )
      if (status === 201 || status === 200) {
        toast.success('Pedido realizado com sucesso')
        deleteAllProducts()
        history.push('/meus-pedidos')
      } else if (status === 401) {
        toast.error('Ocorreu um erro com sua autenticação! Tente novamente.')

        setTimeout(() => {
          history.push('/login')
        }, 2000)
      } else {
        throw new Error()
      }
    } catch (err) {
      toast.error('Falha no sistema tente novamente!')
    }
  }

  return (
    <ContainerResume>
      <Container>
        <div className="container-top">
          <h2 className="title">Resumo do Pedido</h2>
          <p className="items">Items</p>
          <p className="items-price">{formatCurrency(finalPrice)}</p>
          <p className="delivery-tax">Taxa de Entrega</p>
          <p className="delivery-tax-price">{formatCurrency(deliveryTax)}</p>
        </div>
        <div className="container-bottom">
          <p>Total</p>
          <p>{formatCurrency(finalPrice + deliveryTax)}</p>
        </div>
      </Container>
      <Button
        onClick={submitOrder}
        disabled={cartProducts.length === 0 && true}
      >
        Finalizar Pedido
      </Button>
    </ContainerResume>
  )
}
