import NotFound from 'components/not-found'
import PageLayout from 'components/page-layout'
import Proposals from 'containers/proposals'
import React from 'react'
import Review from 'containers/review'
import Search from 'containers/search'
import store from 'store'
import {Provider} from 'react-redux'
import {Redirect, Switch} from 'react-router-dom'
import {Route, Router} from 'react-router-dom'
import {createBrowserHistory} from 'history'

const history = createBrowserHistory()

const App = () => (
  <Provider store={store}>
    <Router history={history}>
      <PageLayout>
        <Switch>
          <Route path="/search" component={Search}/>
          <Route path="/review" component={Review}/>
          <Route path="/proposals" component={Proposals}/>
          <Route path="/notifications" component={NotFound}/>
          <Route path="/profile" component={NotFound}/>
          <Route path="/settings" component={NotFound}/>
          <Redirect exact from="/" to="search"/>
          <Route component={NotFound}/>
        </Switch>
      </PageLayout>
    </Router>
  </Provider>
)

export default App
