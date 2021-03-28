import makeRootReducer from './reducers'
import {
  applyMiddleware,
  compose,
  createStore as createReduxStore
} from 'redux'
import thunk from 'redux-thunk'

function createStore() {
  const middleware = [thunk]
  const enhancers = []
  let composeEnhancers = compose
  
  // leaving it until process env will be settled
  // console.log('process.env: ', process.env)

  if (process.env.NODE_ENV === 'development') {
    if (typeof window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ === 'function') {
      composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    }
  }

  const store = createReduxStore(
    makeRootReducer(),
    composeEnhancers(applyMiddleware(...middleware), ...enhancers)
  )

  store.asyncReducers = {}

  if (module.hot) {
    module.hot.accept('./reducers', () => {
      const reducers = require('./reducers').default
      store.replaceReducer(reducers(store.asyncReducers))
    })
  }

  return store
}

export default createStore
