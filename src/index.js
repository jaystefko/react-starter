import React, { StrictMode, lazy } from 'react'
import { render } from 'react-dom'
import App from './components'
import createStore from './store/createStore'

lazy(() => import('./styles/normalize.css'))
lazy(() => import('./styles/style.css'))

window.store = createStore(window.__INITIAL_STATE__)

render(
  <StrictMode>
    <App />
  </StrictMode>,
  document.getElementById('root')
)
