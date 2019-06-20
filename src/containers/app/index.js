import NotFound from 'components/not-found'
import PageLayout from 'components/page-layout'
import React from 'react'
import Review from 'containers/review'
import Search from 'containers/search'
import SignUp from 'containers/sign-up'
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
          <Redirect exact from="/" to="review"/>
          <Route path="/review" component={Review}/>
          <Route path="/search" component={Search}/>
          <Route path="/proposals" component={SignUp}/>
          <Route path="/notifications" component={NotFound}/>
          <Route path="/profile" component={NotFound}/>
          <Route path="/settings" component={NotFound}/>
          <Route component={NotFound}/>
        </Switch>
      </PageLayout>
    </Router>
  </Provider>
)

export default App
