import PropTypes from 'prop-types'
import React, { useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom'
import { toast } from 'react-toastify'

import BannerImg from '../../assets/banner.jpg'
import { Banner, CardProduct } from '../../components'
import { useUser } from '../../hooks/UserContext'
import api from '../../services/api'
import formatCurrency from '../../utils/formatCurrency'
import {
  Container,
  CategoryMenu,
  CategoryButton,
  ProductsContainer
} from './styles'

export function Products({ location: { state } }) {
  let categoryId = 0

  if (state?.categoryId) {
    categoryId = state.categoryId
  }
  const history = useHistory()
  const [categories, setCategories] = useState([])
  const [products, setProducts] = useState([])
  const [filteredProducts, setFilteredProducts] = useState([])
  const [activeCategory, setActiveCategory] = useState(categoryId)
  const { logout } = useUser()

  useEffect(() => {
    async function loadData() {
      try {
        const [categories, products] = await Promise.all([
          api.get('categories', { validateStatus: () => true }),
          api.get('products', { validateStatus: () => true })
        ])

        if (categories.status === 200 || categories.status === 201) {
          const newCategories = [{ id: 0, name: 'Todos' }, ...categories.data]
          setCategories(newCategories)

          const newProducts = products.data.map(product => {
            return { ...product, formatedPrice: formatCurrency(product.price) }
          })

          setProducts(newProducts)
        } else if (categories.status === 401) {
          logout()
          toast.error('Ocorreu um erro com sua autenticação! Tente novamente.')

          setTimeout(() => {
            history.push('/login')
          }, 2000)
        } else {
          throw new Error()
        }
      } catch (err) {
        toast.error('Falha no sistema! Tente novamente.')
      }
    }
    loadData()
  }, [])

  useEffect(() => {
    if (activeCategory === 0) {
      setFilteredProducts(products)
    } else {
      const newFilteredProducts = products.filter(
        product => product.category_id === activeCategory
      )
      setFilteredProducts(newFilteredProducts)
    }
  }, [activeCategory, products])

  return (
    <Container>
      <Banner src={BannerImg} alt="Imagem banner" isProduct />
      <CategoryMenu>
        {categories &&
          categories.map(category => (
            <CategoryButton
              type="button"
              key={category.id}
              isActiveCategory={activeCategory === category.id}
              onClick={() => setActiveCategory(category.id)}
            >
              {category.name}
            </CategoryButton>
          ))}
      </CategoryMenu>
      <ProductsContainer>
        {filteredProducts &&
          filteredProducts.map(product => (
            <CardProduct key={product.id} product={product} />
          ))}
      </ProductsContainer>
    </Container>
  )
}

Products.propTypes = {
  location: PropTypes.object
}
