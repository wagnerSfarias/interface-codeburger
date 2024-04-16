import LogoutIcon from '@mui/icons-material/Logout'
import React, { useEffect } from 'react'
import { useHistory, useLocation } from 'react-router-dom'

import Cart from '../../assets/cart.svg'
import Person from '../../assets/person.svg'
import paths from '../../constants/paths'
import { useMenu } from '../../hooks/MenuContext'
import { useUser } from '../../hooks/UserContext'
import {
  Container,
  ContainerLeft,
  PageLink,
  ContainerRight,
  Line,
  ContainerText,
  PageLinkExit,
  IconManage,
  MenuMobile,
  BtnLogout
} from './styles'

export function Header() {
  const { logout, userData } = useUser()
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
  return (
    <Container>
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
      </ContainerLeft>
      <ContainerRight>
        <PageLink onClick={() => push(paths.Cart)}>
          <img src={Cart} alt="carrinho" />
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

      <MenuMobile onClick={() => changeIsVisible(true)} />

      <BtnLogout onClick={logoutUser}>
        <LogoutIcon className="icon" />
      </BtnLogout>
    </Container>
  )
}
