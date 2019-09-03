import React from 'react'
import connect from './connect'
import {Redirect, Route} from 'react-router-dom'

const destUrl = props => ({
  pathname: `/login`,
  state: {from: props.location.pathname}
})

const PrivateRoute = ({isAuthenticated, component: Component, ...rest}) => (
  <Route {...rest} render={
    props => isAuthenticated
      ? <Component {...props}/>
      : <Redirect to={destUrl(props)}/>
  }/>
)

export default connect(PrivateRoute)
