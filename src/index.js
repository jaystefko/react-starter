import React, { StrictMode, lazy } from 'react'
import { render } from 'react-dom'
import App from './components'

lazy(() => import('./styles/normalize.css'))
lazy(() => import('./styles/style.css'))

render(
  <StrictMode>
    <App />
  </StrictMode>,
  document.getElementById('root')
)
