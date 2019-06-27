import NotFound from 'components/not-found'
import Notifications from 'containers/notifications'
import PrivateRoute from './private-route'
import React from 'react'
import Review from 'containers/review'
import Search from 'containers/search'
import SignIn from 'containers/sign-in'
import SignUp from 'containers/sign-up'
import {Redirect, Route, Switch} from 'react-router-dom'

const Routes = () => (
  <Switch>
    <Redirect from="/" to="review" exact/>
    <Route path="/review" component={Review}/>
    <Route path="/search" component={Search}/>
    <Route path="/sign-in" component={SignIn}/>
    <Route path="/sign-up" component={SignUp}/>
    <PrivateRoute path="/notifications" component={Notifications}/>
    <Route component={NotFound}/>
  </Switch>
)

export default Routes
