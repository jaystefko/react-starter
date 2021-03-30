import React from 'react'
import { Route, Redirect } from 'react-router-dom'
import Header from '../../components/Header'
import Footer from '../../components/Footer'

function PrivateRoute({ children, token = '', ...rest }) {
  return (
    <Route
      {...rest}
      render={({ location }) =>
        token === '' ? (
          <Redirect
            to={{
              pathname: '/sign-in',
              state: { from: location },
            }}
          />
        ) : (
          <div style={{ height: '100%' }}>
            <Header />
            {children}
            <Footer />
          </div>
        )
      }
    />
  )
}

export default PrivateRoute
