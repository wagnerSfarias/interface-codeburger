import PropTypes from 'prop-types'
import React from 'react'

import { CartProvider } from './CartContext'
import { MenuProvider } from './MenuContext'
import { UserProvider } from './UserContext'

const AppProvider = ({ children }) => (
  <CartProvider>
    <MenuProvider>
      <UserProvider>{children}</UserProvider>
    </MenuProvider>
  </CartProvider>
)

AppProvider.propTypes = {
  children: PropTypes.node
}

export default AppProvider
