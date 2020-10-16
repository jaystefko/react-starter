import React from 'react'
import { Route, BrowserRouter, Switch } from 'react-router-dom'
import PrivateRoute from './PrivateRoute'

import Home from '../components/Home'
import Component_1 from '../components/Component_1'
import Component_2 from '../components/Component_2'
import SignIn from '../components/SignIn'
import SignUp from '../components/SignUp'
import NotFound from '../components/NotFound'
import ForgotPassword from '../components/ForgotPassword'

const Router = (
  <BrowserRouter>
    <Switch>
      <PrivateRoute exact path='/'>
        <Home />
      </PrivateRoute>
      <PrivateRoute exact path='/component-1'>
        <Component_1 />
      </PrivateRoute>
      <PrivateRoute exact path='/component-2'>
        <Component_2 />
      </PrivateRoute>
      <Route exact path='/sign-up' component={SignUp} />
      <Route exact path='/sign-in' component={SignIn} />
      <Route exact path='/forgot-password' component={ForgotPassword} />
      <Route component={NotFound} />
    </Switch>
  </BrowserRouter>
)

export default Router
