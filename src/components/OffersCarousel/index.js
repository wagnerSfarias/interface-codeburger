import React, { useEffect, useState } from 'react'
import Carousel from 'react-elastic-carousel'
import { useHistory } from 'react-router-dom'
import { toast } from 'react-toastify'

import Offers from '../../assets/name-offers.png'
import { useCart } from '../../hooks/CartContext'
import { useUser } from '../../hooks/UserContext'
import api from '../../services/api'
import formatCurrency from '../../utils/formatCurrency'
import { Button } from '../Button'
import { Container, ProductImg, ContainerItems, Image } from './styles'

export function OffersCarousel() {
  const [offers, setOffers] = useState([])
  const { putProductInCart } = useCart()
  const { push } = useHistory()
  const { logout } = useUser()

  useEffect(() => {
    async function loadOffers() {
      try {
        const response = await api.get('products', {
          validateStatus: () => true
        })

        if (response.status === 200 || response.status === 201) {
          const onlyOffers = response.data
            .filter(offers => offers.offer)
            .map(product => {
              return {
                ...product,
                formatedPrice: formatCurrency(product.price)
              }
            })
          setOffers(onlyOffers)
        } else if (response.status === 401) {
          logout()
          toast.error('Ocorreu um erro com sua autenticação! Tente novamente.')

          setTimeout(() => {
            push('/login')
          }, 2000)
        } else {
          throw new Error()
        }
      } catch (err) {
        toast.error('Falha no sistema! Tente novamente. ')
      }
    }
    loadOffers()
  }, [])

  const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 400, itemsToShow: 2 },
    { width: 600, itemsToShow: 3 },
    { width: 900, itemsToShow: 4 },
    { width: 1000, itemsToShow: 5 }
  ]

  return (
    <Container>
      <ProductImg src={Offers} alt="logo de Oferta" />
      <Carousel
        itemsToShow={4}
        style={{ width: '90%' }}
        breakPoints={breakPoints}
      >
        {offers &&
          offers.map(product => (
            <ContainerItems key={product.id}>
              <Image src={product.url} alt="foto do produto " />
              <p>{product.name}</p>
              <p>{product.formatedPrice}</p>
              <Button
                isCard
                onClick={() => {
                  putProductInCart(product)
                  push('/carrinho')
                }}
              >
                Peça agora
              </Button>
            </ContainerItems>
          ))}
      </Carousel>
    </Container>
  )
}
