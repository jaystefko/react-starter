import React, { StrictMode, lazy } from 'react'
import ReactDOM from 'react-dom'
import App from './components'

lazy(() => import('./styles/normalize.css'))
lazy(() => import('./styles/style.css'))

ReactDOM.render(
  <StrictMode>
    <App />
  </StrictMode>,
  document.getElementById('root')
)
