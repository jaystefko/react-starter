import { combineReducers } from 'redux'
import { CLEAR_STORE } from './actions'
import authReducer from './thunks/auth'

function makeRootReducer(asyncReducers) {
  const appReducer = combineReducers({
    auth: authReducer,
    ...asyncReducers,
  })

  return (state, action) => {
    // clear store idea taken from here:
    // https://stackoverflow.com/questions/35622588/how-to-reset-the-state-of-a-redux-store

    if (action.type === CLEAR_STORE) {
      localStorage.clear()
      state = undefined
    }

    return appReducer(state, action)
  }
}

export default makeRootReducer
