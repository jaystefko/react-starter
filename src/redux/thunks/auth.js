import { SET_TOKEN, SET_USER } from '../actions'
// import axios from 'axios'
import { httpErrorHandler } from '../../utils/handlers'

function setTokenAction(token = '') {
  return {
    type: SET_TOKEN,
    data: token,
  }
}

function setUserAction(user = null) {
  return {
    type: SET_USER,
    data: user,
  }
}

export function signIn(email = '', password = '') {
  return async function (dispatch) {
    try {
      // here call api
      let response = { data: { user: { name: 'UserName', email: email, token: 'hehe_some_token' } } }
      dispatch(setTokenAction(response.data.token))
      dispatch(setUserAction(response.data.user))
      return true
    } catch (error) {
      httpErrorHandler(error)
      return false
    }
  }
}

export function signUp(name = '', email = '', password = '') {
  return async function (dispatch) {
    try {
      // here call api
      return true
    } catch (error) {
      httpErrorHandler(error)
      return false
    }
  }
}

const ACTION_HANDLER = {
  [SET_TOKEN]: function (state, action) {
    return {
      ...state,
      token: action.data,
    }
  },
  [SET_USER]: function (state, action) {
    return {
      ...state,
      user: action.data,
    }
  },
}

const initialState = {
  token: localStorage.getItem('token') || '',
  user: JSON.parse(localStorage.getItem('user')),
}

export default function authReducer(state = initialState, action) {
  const handler = ACTION_HANDLER[action.type]
  return handler ? handler(state, action) : state
}
