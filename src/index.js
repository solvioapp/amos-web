import React from 'react'
import App from 'containers/app'
import store from 'store'
import {Provider} from 'react-redux'
import {Router} from 'react-router-dom'
import {createBrowserHistory} from 'history'
import {render} from 'react-dom'

const history = createBrowserHistory()

render(
  <Provider store={store}>
    <Router history={history}>
      <App/>
    </Router>
  </Provider>,
  document.getElementById(`app`)
)
