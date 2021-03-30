import React, { lazy } from 'react'
import { Route, BrowserRouter, Switch } from 'react-router-dom'
import PrivateRoute from './PrivateRoute'

const Home = lazy(() => import('../components/Home'))
const Component_1 = lazy(() => import('../components/Component_1'))
const Component_2 = lazy(() => import('../components/Component_2'))
const SignIn = lazy(() => import('../components/SignIn'))
const SignUp = lazy(() => import('../components/SignUp'))
const NotFound = lazy(() => import('../components/NotFound'))
const ForgotPassword = lazy(() => import('../components/ForgotPassword'))

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
