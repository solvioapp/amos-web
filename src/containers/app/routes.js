import LogIn from 'containers/login'
import NotFound from 'components/not-found'
import PrivateRoute from './private-route'
import Profile from 'containers/profile'
import React from 'react'
import Review from 'containers/review'
import Search from 'containers/search'
import SignUp from 'containers/sign-up'
import {Redirect, Route, Switch} from 'react-router-dom'

const Routes = () => (
  <Switch>
    <Redirect from="/" to="/review" exact/>
    <Route path="/review" component={Review}/>
    <Route path="/search" component={Search}/>
    <Route path="/login" component={LogIn}/>
    <Route path="/sign-up" component={SignUp}/>
    <Route path="/forgot-password" component={NotFound}/>
    <PrivateRoute path="/profile" component={Profile}/>
    <Route component={NotFound}/>
  </Switch>
)

export default Routes
