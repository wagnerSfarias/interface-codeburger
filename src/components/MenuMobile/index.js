import React, { useEffect } from 'react'

import { useMenu } from '../../hooks/MenuContext'
import { useUser } from '../../hooks/UserContext'
import listOptions from './menu-list'
import { Background, Container, Close, ContainerNav, Option } from './styles'

export function MenuMobile() {
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
          <p>Olá, {userData.name}</p>

          {listOptions.map(option =>
            option.label === 'Painel Admin' ? (
              <Option key={option.id} to={option.link}>
                {userData.admin && (
                  <>
                    <option.icon />
                    {option.label}
                  </>
                )}
              </Option>
            ) : (
              <Option key={option.id} to={option.link}>
                <option.icon />
                {option.label}
              </Option>
            )
          )}
        </ContainerNav>
      </Container>
    </Background>
  )
}
