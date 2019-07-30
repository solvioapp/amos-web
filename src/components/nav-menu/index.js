import Top_ from './top.sc'
import Link_ from './link.sc'
import React from 'react'
import {withRouter} from 'react-router-dom'

const NavMenu = ({isAuthenticated, history: {location: {pathname: path}}}) => {
  const logIn = path === '/log-in'
  return (
    <Top_>
      <Link_ to="/review">Review</Link_>
      <Link_ to="/search">Search</Link_>
      <Link_ to="/notifications" hidden={!isAuthenticated}>
        Notifications
      </Link_>
      <Link_ to="/sign-up" hidden={isAuthenticated || logIn}>
        Sign up
      </Link_>
      <Link_ to='/log-in' hidden={isAuthenticated || !logIn}>
        Log in
      </Link_>
    </Top_>
  )
}

export default withRouter(NavMenu)
