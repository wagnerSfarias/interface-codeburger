import React from 'react'
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom'

import paths from '../constants/paths'
import { Home, Login, Products, Register, Cart, Admin } from '../pages'
import PrivateRoute from './private-route'

export default function Routes() {
  return (
    <Router>
      <Switch>
        <Route component={Login} path="/login" />
        <Route component={Register} path="/cadastro" />
        <PrivateRoute exact component={Home} path="/" />
        <PrivateRoute component={Products} path="/produtos" />
        <PrivateRoute component={Cart} path="/carrinho" />

        <PrivateRoute component={Admin} path={paths.Orders} isAdmin />
        <PrivateRoute component={Admin} path={paths.ListProducts} isAdmin />
        <PrivateRoute component={Admin} path={paths.NewProduct} isAdmin />
        <PrivateRoute component={Admin} path={paths.EditProduct} isAdmin />
      </Switch>
    </Router>
  )
}
