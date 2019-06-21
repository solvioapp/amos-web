import React from 'react'
import {Redirect, Route} from 'react-router-dom'
import connect from './connect'

const PrivateRoute = ({isAuthenticated, component: Component, ...rest}) => (
  <Route
    {...rest}
    render={props => isAuthenticated
      ? <Component {...props}/>
      : <Redirect to={{pathname: `/sign-in`, state: {from: props.location.pathname}}}/>
    }
  />
)

export default connect(PrivateRoute)
