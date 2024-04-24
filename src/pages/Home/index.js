import React from 'react'

import BannerImg from '../../assets/banner-home.jpg'
import { Banner, CategoryCarousel, OffersCarousel } from '../../components'
import { Container } from './styles'

export function Home() {
  return (
    <Container>
      <Banner src={BannerImg} alt="Imagem banner" />
      <CategoryCarousel />
      <OffersCarousel />
    </Container>
  )
}
