import Email from './email'
import React from 'react'
import Success from './success'
import Guest from './guest'
import {Switch, Route} from 'react-router-dom'

const SignUp = () => (
  <Switch>
    <Route path="/sign-up" component={Guest} exact/>
    <Route path="/sign-up/email" component={Email}/>
    <Route path="/sign-up/success" component={Success}/>
  </Switch>
)

export default SignUp
