import Instagran from '@mui/icons-material/Instagram'
import WhatsApp from '@mui/icons-material/WhatsApp'
import React from 'react'
import { SiIfood } from 'react-icons/si'

import Logo from '../../assets/logo-footer.png'
import { Container, Icons, Details, Copy } from './styles'

export function Footer() {
  return (
    <Container>
      <Icons>
        <a href="https://www.instagram.com/" target="_blank" rel="noreferrer">
          <Instagran />
        </a>
        <a
          href="http://api.whatsapp.com/send?phone=551139938888&text=Olá,%20Pode%20me%20ajudar%20com%20meu%20pedido?"
          target="_blank"
          rel="noreferrer"
        >
          <WhatsApp />
        </a>
        <a href="https://www.ifood.com.br/" target="_blank" rel="noreferrer">
          <SiIfood />
        </a>
      </Icons>

      <img src={Logo} />

      <Details>
        <p>Av. Dr. Codigo, 526 - Vila Madalena - SP</p>
        <p>contato@codeburger.com | 55 11 3993-8888</p>
      </Details>
      <Copy>&copy; 2018 - Todos os direitos reservados.</Copy>
    </Container>
  )
}
