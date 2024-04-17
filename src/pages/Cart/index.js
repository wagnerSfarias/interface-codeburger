import React from 'react'

import BannerImg from '../../assets/banner.jpg'
import { Banner, CartItems, CartResume, MenuMobile } from '../../components'
import { Container, Wrapper } from './styles'

export function Cart() {
  return (
    <Container>
      <MenuMobile />
      <Banner src={BannerImg} alt="Imagem banner" />
      <Wrapper>
        <CartItems />
        <CartResume />
      </Wrapper>
    </Container>
  )
}
