import Email from './email'
import React from 'react'
import Success from './success'
import Welcome from './welcome'
import {Switch, Route} from 'react-router-dom'

const SignUp = () => (
  <Switch>
    <Route path="/sign-up" component={Welcome} exact/>
    <Route path="/sign-up/email" component={Email}/>
    <Route path="/sign-up/success" component={Success}/>
  </Switch>
)

export default SignUp
