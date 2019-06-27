import PageLayout from './page-layout'
import React from 'react'
import Routes from './routes'
import i18n from '../../locales'
import store from 'store'
import {I18nextProvider} from 'react-i18next'
import {Provider} from 'react-redux'
import {Router} from 'react-router-dom'
import {createBrowserHistory} from 'history'

const history = createBrowserHistory()

const App = () => (
  <Provider store={store}>
    <I18nextProvider i18n={i18n}>
      <Router history={history}>
        <PageLayout>
          <Routes/>
        </PageLayout>
      </Router>
    </I18nextProvider>
  </Provider>
)

export default App
