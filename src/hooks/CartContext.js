import PropTypes from 'prop-types'
import React, { createContext, useContext, useState, useEffect } from 'react'

const CartContext = createContext({})

export const CartProvider = ({ children }) => {
  const [cartProducts, setCartProducts] = useState([])

  const updateLocalStorage = async product => {
    await localStorage.setItem('codeburger:cartInfo', JSON.stringify(product))
  }

  const putProductInCart = async product => {
    const clientInfo = await localStorage.getItem('codeburger:user')

    const dataUser = JSON.parse(clientInfo)
    const cartIndex = cartProducts.findIndex(prod => prod.id === product.id)

    let newCartProducts = []
    if (cartIndex >= 0 && cartProducts[cartIndex].userId === dataUser.id) {
      newCartProducts = cartProducts

      newCartProducts[cartIndex].quantity =
        newCartProducts[cartIndex].quantity + 1

      setCartProducts(newCartProducts)
    } else {
      product.quantity = 1
      product.userId = dataUser.id
      newCartProducts = [...cartProducts, product]
      setCartProducts(newCartProducts)
    }

    await updateLocalStorage(newCartProducts)
  }

  const increaseProducts = async (productId, idUser) => {
    const newCart = cartProducts.map(product => {
      return product.id === productId && product.userId === idUser
        ? { ...product, quantity: product.quantity + 1 }
        : product
    })

    setCartProducts(newCart)

    await updateLocalStorage(newCart)
  }

  const decreaseProducts = async (productId, idUser) => {
    const cartIndex = cartProducts.findIndex(
      product => product.id === productId && idUser === product.userId
    )

    if (cartProducts[cartIndex].quantity > 1) {
      const newCart = cartProducts.map(product => {
        return product.id === productId && product.userId === idUser
          ? { ...product, quantity: product.quantity - 1 }
          : product
      })
      setCartProducts(newCart)

      await updateLocalStorage(newCart)
    } else {
      cartProducts.splice(cartIndex, 1)
      setCartProducts([...cartProducts])

      await updateLocalStorage(cartProducts)
    }
  }

  const deleteAllProducts = async id => {
    const result = cartProducts.filter(data => data.userId !== id)

    updateLocalStorage(result)
    setCartProducts(result)
  }

  useEffect(() => {
    const loadCartData = async () => {
      const clientCartData = await localStorage.getItem('codeburger:cartInfo')

      if (clientCartData) {
        setCartProducts(JSON.parse(clientCartData))
      }
    }
    loadCartData()
  }, [])

  return (
    <CartContext.Provider
      value={{
        cartProducts,
        putProductInCart,
        increaseProducts,
        decreaseProducts,
        deleteAllProducts
      }}
    >
      {children}
    </CartContext.Provider>
  )
}

export const useCart = () => {
  const context = useContext(CartContext)

  if (!context) {
    throw new Error('useCart must be used with UserContext')
  }

  return context
}

CartProvider.propTypes = {
  children: PropTypes.node
}
