import React, { useEffect, useState } from 'react'
import Carousel from 'react-elastic-carousel'
import { Link, useHistory } from 'react-router-dom'
import { toast } from 'react-toastify'

import Category from '../../assets/name-category.png'
import { useUser } from '../../hooks/UserContext'
import api from '../../services/api'
import { Button } from '../Button'
import { Container, CategoryImg, ContainerItems, Image } from './styles'

export function CategoryCarousel() {
  const [categories, setCategories] = useState([])
  const history = useHistory()
  const { logout } = useUser()

  useEffect(() => {
    async function loadCategories() {
      try {
        const response = await api.get('categories', {
          validateStatus: () => true
        })

        if (response.status === 200 || response.status === 201) {
          setCategories(response.data)
        } else if (response.status === 401) {
          logout()
          toast.error('Ocorreu um erro com sua autenticação! Tente novamente. ')

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
