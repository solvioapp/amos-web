import Link from './link.sc'
import Menu from './menu.sc'
import React from 'react'
import {withRouter} from 'react-router-dom'

const NavMenu = ({isAuthenticated, history: {location: {pathname: path}}}) => {
  const logIn = path === '/log-in'
  return (
    <Menu>
      <Link to="/review">Review</Link>
      <Link to="/search">Search</Link>
      <Link to="/notifications" hidden={!isAuthenticated}>
        Notifications
      </Link>
      <Link to="/sign-up" hidden={isAuthenticated || logIn}>
        Sign up
      </Link>
      <Link to='/log-in' hidden={isAuthenticated || !logIn}>
        Log in
      </Link>
    </Menu>
  )
}

export default withRouter(NavMenu)
