import LogIn from 'containers/log-in'
import NotFound from 'components/not-found'
import Notifications from 'containers/notifications'
import PrivateRoute from './private-route'
import React from 'react'
import Review from 'containers/review'
import Search from 'containers/search'
import SignUp from 'containers/sign-up'
import {Redirect, Route, Switch} from 'react-router-dom'

const Routes = () => (
  <Switch>
    {/* TODO: If user is authenticated, redirect should be to /review instead of search */}
    <Redirect from="/" to="search" exact/>
    <Route path="/review" component={Review}/>
    <Route path="/search" component={Search}/>
    <Route path="/log-in" component={LogIn}/>
    <Route path="/sign-up" component={SignUp}/>
    <PrivateRoute path="/notifications" component={Notifications}/>
    <Route component={NotFound}/>
  </Switch>
)

export default Routes
