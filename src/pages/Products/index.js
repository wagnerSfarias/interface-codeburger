import PropTypes from 'prop-types'
import React, { useEffect, useState } from 'react'

import BannerImg from '../../assets/banner.jpg'
import { Banner, CardProduct } from '../../components'
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

  const [categories, setCategories] = useState([])
  const [products, setProducts] = useState([])
  const [filteredProducts, setFilteredProducts] = useState([])
  const [activeCategory, setActiveCategory] = useState(categoryId)

  useEffect(() => {
    async function loadData() {
      try {
        const categories = await api.get('categories')
        const products = await api.get('products')

        const newCategories = [{ id: 0, name: 'Todos' }, ...categories.data]

        const newProducts = products.data.map(product => {
          return { ...product, formatedPrice: formatCurrency(product.price) }
        })

        setCategories(newCategories)
        setProducts(newProducts)
      } catch (err) {}
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
