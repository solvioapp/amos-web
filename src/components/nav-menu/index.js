import Link from './link.sc'
import Menu from './menu.sc'
import React from 'react'

const NavMenu = () => (
  <Menu>
    <Link to="/review">Review</Link>
    <Link to="/search">Search</Link>
    <Link to="/sign-up">Sign up</Link>
  </Menu>
)

export default NavMenu
