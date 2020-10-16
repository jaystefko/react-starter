import React from 'react'
import { Provider } from 'react-redux'
import Router from '../router'
import PropTypes from 'prop-types'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

export function notify (message = '', type) {
  toast(message, { type: toast.TYPE[type] })
}

const App = props =>
  <Provider store={props.store}>
    {Router}
    <ToastContainer autoClose={4000} position={toast.POSITION.TOP_RIGHT} />
  </Provider>

App.propTypes = {
  store: PropTypes.object,
}

export default App
