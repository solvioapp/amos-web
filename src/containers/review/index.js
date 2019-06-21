import * as R from 'ramda'
import Guest from './guest'
import LearnRequire from './learn-require'
import Links from './links'
import React from 'react'
import Thanks from './thanks'
import Topics from './topics'
import connect from './connect'
import {Switch, Redirect, Route} from 'react-router-dom'

const redirect = R.both(
  R.propEq(`isAuthenticated`, true),
  R.pathEq([`location`, `pathname`], `/review`)
)

function Review(props) {
  if (redirect(props)) {
    return <Redirect to="/review/links"/>
  }

  return (
    <Switch>
      <Route path="/review" component={Guest} exact/>
      <Route path="/review/links" component={Links}/>
      <Route path="/review/topics" component={Topics}/>
      <Route path="/review/requirements" component={LearnRequire}/>
      <Route path="/review/thanks" component={Thanks}/>
    </Switch>
  )
}

export default connect(Review)
