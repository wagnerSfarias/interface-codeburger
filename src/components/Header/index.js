import LogoutIcon from '@mui/icons-material/Logout'
import React, { useEffect } from 'react'
import { useHistory, useLocation } from 'react-router-dom'

import Cart from '../../assets/cart.svg'
import EmptyCart from '../../assets/empty-cart.svg'
import Person from '../../assets/person.svg'
import paths from '../../constants/paths'
import { useCart } from '../../hooks/CartContext'
import { useMenu } from '../../hooks/MenuContext'
import { useUser } from '../../hooks/UserContext'
import { MenuMobile } from '../MenuMobile/index'
import {
  Container,
  ContainerLeft,
  PageLink,
  ContainerRight,
  Line,
  ContainerText,
  PageLinkExit,
  IconManage,
  IconMenu,
  BtnLogout
} from './styles'

export function Header() {
  const { logout, userData } = useUser()
  const { cartProducts } = useCart()
  const { changeIsVisible } = useMenu()
  const {
    push,
    location: { pathname }
  } = useHistory()
  const location = useLocation()

  useEffect(() => {
    changeIsVisible(false)
  }, [location])

  const logoutUser = () => {
    logout()
    push('/login')
  }

  const existProduct = cartProducts.filter(data => data.userId === userData.id)

  return (
    <Container>
      <MenuMobile />
      <ContainerLeft>
        <PageLink onClick={() => push(paths.Home)} isActive={pathname === '/'}>
          Início
        </PageLink>
        <PageLink
          onClick={() => push(paths.Products)}
          isActive={pathname.includes('produtos')}
        >
          Ver Produtos
        </PageLink>
        <PageLink
          onClick={() => push(paths.MyOrders)}
          isActive={pathname.includes('meus-pedidos')}
        >
          Meus Pedidos
        </PageLink>
      </ContainerLeft>
      <ContainerRight>
        <PageLink onClick={() => push(paths.Cart)}>
          <img
            src={existProduct.length > 0 ? Cart : EmptyCart}
            alt="carrinho"
          />
        </PageLink>
        <Line></Line>
        {userData?.admin ? (
          <PageLink onClick={() => push(paths.Orders)}>
            <IconManage />
          </PageLink>
        ) : (
          <PageLink>
            <img src={Person} alt="perfil" />
          </PageLink>
        )}

        <ContainerText>
          <p>Olá, {userData.name}</p>
          <PageLinkExit onClick={logoutUser}>Sair</PageLinkExit>
        </ContainerText>
      </ContainerRight>

      <IconMenu onClick={() => changeIsVisible(true)} />

      <BtnLogout onClick={logoutUser}>
        <LogoutIcon className="icon" />
      </BtnLogout>
    </Container>
  )
}
