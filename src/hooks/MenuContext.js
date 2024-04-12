import PropTypes from 'prop-types'
import React, { createContext, useContext, useState } from 'react'

const MenuContext = createContext({})

export const MenuProvider = ({ children }) => {
  const [menuIsVisible, setMenuIsVisible] = useState(false)

  const changeIsVisible = value => {
    setMenuIsVisible(value)
  }

  return (
    <MenuContext.Provider value={{ menuIsVisible, changeIsVisible }}>
      {children}
    </MenuContext.Provider>
  )
}

export const useMenu = () => {
  const context = useContext(MenuContext)

  if (!context) {
    throw new Error('useMenu must be used with MenuContext')
  }

  return context
}

MenuProvider.propTypes = {
  children: PropTypes.node
}
