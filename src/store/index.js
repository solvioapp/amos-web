import {applyMiddleware, compose, createStore} from 'redux'
import createSagaMiddleware from 'redux-saga'
import devtools from './devtools'
import reducers from './reducers'
import sagas from './sagas'

const sagaMiddleware = createSagaMiddleware()

const middlewares = compose(
  applyMiddleware(sagaMiddleware),
  devtools()
)

const store = createStore(
  reducers,
  middlewares
)

sagaMiddleware.run(sagas)

export default store
