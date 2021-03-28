import React from 'react'
import ReactDOM from 'react-dom'
import App from './components'
import createStore from './store/createStore'

import './styles/normalize.css'
import './styles/style.css'

const store = createStore(window.__INITIAL_STATE__)

window.store = store

ReactDOM.render(<App store={store} />, document.getElementById('root'))
