import React, { useEffect, useState } from 'react'
import Carousel from 'react-elastic-carousel'
import { Link } from 'react-router-dom'

import Category from '../../assets/name-category.png'
import api from '../../services/api'
import { Button } from '../Button'
import { Container, CategoryImg, ContainerItems, Image } from './styles'

export function CategoryCarousel() {
  const [categories, setCategories] = useState([])

  useEffect(() => {
    async function loadCategories() {
      try {
        const response = await api.get('categories')
        setCategories(response.data)
      } catch (err) {}
    }

    loadCategories()
  }, [])

  const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 400, itemsToShow: 2 },
    { width: 600, itemsToShow: 3 },
    { width: 900, itemsToShow: 4 },
    { width: 1300, itemsToShow: 5 }
  ]

  return (
    <Container>
      <CategoryImg src={Category} alt="logo da categoria" />
      <Carousel
        itemsToShow={2}
        style={{ width: '90%' }}
        breakPoints={breakPoints}
        isRTL={false}
      >
        {categories &&
          categories.map(category => (
            <ContainerItems key={category.id}>
              <Image src={category.url} alt="foto de categoria" />
              <Link
                to={{
                  pathname: '/produtos',
                  state: { categoryId: category.id }
                }}
              >
                <Button isCard>{category.name}</Button>
              </Link>
            </ContainerItems>
          ))}
      </Carousel>
    </Container>
  )
}
