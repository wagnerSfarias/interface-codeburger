import PropTypes from 'prop-types'
import React, { useEffect, useState } from 'react'

import BannerImg from '../../assets/banner.jpg'
import { Banner, CardProduct, Footer, LoadingMessage } from '../../components'
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
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function loadData() {
      try {
        const [categories, products] = await Promise.all([
          api.get('categories'),
          api.get('products')
        ])

        const newCategories = [{ id: 0, name: 'Todos' }, ...categories.data]
        setCategories(newCategories)
        setTimeout(() => {
          const newProducts = products.data.map(product => {
            return { ...product, formatedPrice: formatCurrency(product.price) }
          })

          setProducts(newProducts)
          setLoading(false)
        }, 1000)
      } catch (err) {
        setLoading(false)
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
      <ProductsContainer isProduct={filteredProducts.length}>
        {filteredProducts &&
          filteredProducts.map(product => (
            <CardProduct key={product.id} product={product} />
          ))}
      </ProductsContainer>
      {loading && <LoadingMessage loading />}

      {!loading && filteredProducts.length === 0 && (
        <LoadingMessage>Nenhum produto foi encontrado.</LoadingMessage>
      )}

      <Footer />
    </Container>
  )
}

Products.propTypes = {
  location: PropTypes.object
}
