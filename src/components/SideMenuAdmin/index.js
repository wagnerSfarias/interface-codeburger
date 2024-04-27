import LogoutIcon from '@mui/icons-material/Logout'
import PropTypes from 'prop-types'
import React, { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

import { useMenu } from '../../hooks/MenuContext'
import { useUser } from '../../hooks/UserContext'
import { AdminMobile } from '../MenuMobile/admin'
import listLinks from './menu-list'
import {
  Container,
  ItemsContainer,
  ContainerButton,
  ListLink,
  MenuMobile
} from './styles'

export function SideMenuAdmin({ path }) {
  const { logout } = useUser()
  const { changeIsVisible } = useMenu()

  const location = useLocation()

  useEffect(() => {
    changeIsVisible(false)
  }, [location])

  return (
    <Container>
      <AdminMobile />
      <hr></hr>
      {listLinks.map(item => (
        <ItemsContainer key={item.id} isActive={path === item.link}>
          <item.icon className="icon" />
          <ListLink to={item.link}>{item.label}</ListLink>
        </ItemsContainer>
      ))}
      <hr></hr>
      <MenuMobile onClick={() => changeIsVisible(true)} />
      <ContainerButton onClick={logout}>
        <LogoutIcon className="icon" />
        Sair
      </ContainerButton>
    </Container>
  )
}

SideMenuAdmin.propTypes = {
  path: PropTypes.string
}
