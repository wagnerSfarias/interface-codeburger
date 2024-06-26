import PropTypes from 'prop-types'
import React from 'react'

import { SideMenuAdmin } from '../../components/SideMenuAdmin'
import paths from '../../constants/paths'
import EditCategory from './EditCategory'
import EditProduct from './EditProduct'
import ListProducts from './ListProducts'
import NewCategory from './NewCategory'
import NewProducts from './NewProducts'
import Orders from './Orders'
import { Container, ContainerItems } from './styles'

export function Admin({ match: { path } }) {
  return (
    <Container>
      <SideMenuAdmin path={path} />
      <ContainerItems>
        {path === paths.Orders && <Orders />}
        {path === paths.ListProducts && <ListProducts />}
        {path === paths.NewProduct && <NewProducts />}
        {path === paths.EditProduct && <EditProduct />}
        {path === paths.NewCategory && <NewCategory />}
        {path === paths.EditCategory && <EditCategory />}
      </ContainerItems>
    </Container>
  )
}

Admin.propTypes = {
  match: PropTypes.object
}
