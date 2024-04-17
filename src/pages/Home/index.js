import React from 'react'

import BannerImg from '../../assets/banner-home.jpg'
import {
  Banner,
  CategoryCarousel,
  OffersCarousel,
  MenuMobile
} from '../../components'
import { Container } from './styles'

export function Home() {
  return (
    <Container>
      <MenuMobile />
      <Banner src={BannerImg} alt="Imagem banner" />
      <CategoryCarousel />
      <OffersCarousel />
    </Container>
  )
}
