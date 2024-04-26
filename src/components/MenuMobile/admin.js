import React, { useEffect } from 'react'

import listOptions from '../../components/SideMenuAdmin/menu-list'
import { useMenu } from '../../hooks/MenuContext'
import { useUser } from '../../hooks/UserContext'
import { Background, Container, Close, ContainerNav, Option } from './styles'

export function AdminMobile() {
  const { userData } = useUser()
  const { menuIsVisible, changeIsVisible } = useMenu()

  useEffect(() => {
    document.body.style.overflow = menuIsVisible ? 'hidden' : 'auto'
  }, [menuIsVisible])

  return (
    <Background isVisible={menuIsVisible}>
      <Container isVisible={menuIsVisible}>
        <Close onClick={() => changeIsVisible(false)} />
        <ContainerNav>
          <p>Olá, {userData?.name}</p>
          {listOptions.map(option => (
            <Option to={option.link} key={option.id}>
              <option.icon />
              {option.label}
            </Option>
          ))}
        </ContainerNav>
      </Container>
    </Background>
  )
}
