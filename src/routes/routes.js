import React from 'react'
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom'

import { ScrollToTop } from '../components'
import paths from '../constants/paths'
import {
  Home,
  Login,
  Products,
  MyOrders,
  Register,
  Cart,
  Admin
} from '../pages'
import PrivateRoute from './private-route'

export default function Routes() {
  return (
    <Router>
      <ScrollToTop />
      <Switch>
        <Route component={Login} path="/login" />
        <Route component={Register} path="/cadastro" />
        <PrivateRoute exact component={Home} path={paths.Home} />
        <PrivateRoute component={Products} path={paths.Products} />
        <PrivateRoute component={Cart} path={paths.Cart} />
        <PrivateRoute component={MyOrders} path={paths.MyOrders} />

        <PrivateRoute component={Admin} path={paths.Orders} isAdmin />
        <PrivateRoute component={Admin} path={paths.ListProducts} isAdmin />
        <PrivateRoute component={Admin} path={paths.NewProduct} isAdmin />
        <PrivateRoute component={Admin} path={paths.EditProduct} isAdmin />
        <PrivateRoute component={Admin} path={paths.NewCategory} isAdmin />
        <PrivateRoute component={Admin} path={paths.EditCategory} isAdmin />
      </Switch>
    </Router>
  )
}
