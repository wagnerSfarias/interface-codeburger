import LogoutIcon from '@mui/icons-material/Logout'
import PropTypes from 'prop-types'
import React, { useEffect } from 'react'
import { useLocation, useHistory } from 'react-router-dom'

import { useMenu } from '../../hooks/MenuContext'
import { useUser } from '../../hooks/UserContext'
import { AdminMobile } from '../MenuMobile/admin'
import listLinks from './menu-list'
import {
  Container,
  ContainerMenu,
  OptionMenu,
  ContainerButton,
  ListLink,
  MenuMobile
} from './styles'

export function SideMenuAdmin({ path }) {
  const { logout } = useUser()
  const { changeIsVisible } = useMenu()
  const { push } = useHistory()

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
      <AdminMobile />
      <hr></hr>
      <ContainerMenu>
        {listLinks.map(item => (
          <OptionMenu key={item.id} isActive={path === item.link}>
            <item.icon className="icon" />
            <ListLink to={item.link}>{item.label}</ListLink>
          </OptionMenu>
        ))}
      </ContainerMenu>
      <hr></hr>
      <MenuMobile onClick={() => changeIsVisible(true)} />
      <ContainerButton onClick={logoutUser}>
        <LogoutIcon className="icon" />
        Sair
      </ContainerButton>
    </Container>
  )
}

SideMenuAdmin.propTypes = {
  path: PropTypes.string
}
