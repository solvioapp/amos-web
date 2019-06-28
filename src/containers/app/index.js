import PageLayout from './page-layout'
import React from 'react'
import Routes from './routes'
import store from 'store'
import {Provider} from 'react-redux'
import {Router} from 'react-router-dom'
import {history} from 'common/history'

const App = () => (
  <Provider store={store}>
    <Router history={history}>
      <PageLayout>
        <Routes/>
      </PageLayout>
    </Router>
  </Provider>
)

export default App
