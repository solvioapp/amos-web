import Link from './link.sc'
import Menu from './menu.sc'
import React from 'react'

const NavMenu = ({isAuthenticated}) => (
  <Menu>
    <Link to="/review">Review</Link>
    <Link to="/search">Search</Link>
    <Link to="/topics" hidden={!isAuthenticated}>
      Topics
    </Link>
    <Link to="/sign-up" hidden={isAuthenticated}>
      Sign up
    </Link>
  </Menu>
)

export default NavMenu