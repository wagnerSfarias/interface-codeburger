import React, { useEffect, useState } from 'react'
import Carousel from 'react-elastic-carousel'
import { toast } from 'react-toastify'

import Offers from '../../assets/name-offers.png'
import { useCart } from '../../hooks/CartContext'
import api from '../../services/api'
import formatCurrency from '../../utils/formatCurrency'
import { Button } from '../Button'
import { Container, ProductImg, ContainerItems, Image } from './styles'

export function OffersCarousel() {
  const [offers, setOffers] = useState([])
  const { putProductInCart } = useCart()

  useEffect(() => {
    async function loadOffers() {
      try {
        const response = await api.get('products')
        const onlyOffers = response.data
          .filter(offers => offers.offer)
          .map(product => {
            return {
              ...product,
              formatedPrice: formatCurrency(product.price)
            }
          })

        setOffers(onlyOffers)
      } catch (err) {}
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
              <Image src={product.url} alt={`produto ${product.name}`} />
              <p>{product.name}</p>
              <p>{product.formatedPrice}</p>
              <Button
                isCard
                onClick={() => {
                  putProductInCart(product)
                  toast.success(`${product.name}, foi adicionado ao carrinho !`)
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
