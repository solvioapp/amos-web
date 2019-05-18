/* eslint-disable no-underscore-dangle */
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';

import mainReducer from '../../../reducers/index.reducer';

import promiseMiddleware from '../middleware/promise-middleware';

const middleware = [thunk, promiseMiddleware];

const isDebugMode = process.env.REACT_APP_DEBUG_MODE === 'true';

const finalCreateStore = compose(
    applyMiddleware(...middleware),
    window.__REDUX_DEVTOOLS_EXTENSION__ && isDebugMode
        ? window.__REDUX_DEVTOOLS_EXTENSION__()
        : f => f,
)(createStore);

export const store = finalCreateStore(mainReducer);
