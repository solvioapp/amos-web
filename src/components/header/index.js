import AppLogo from './app-logo.sc'
import Header from './header.sc'
import Icon from '../icon'
import Icons from './icons.sc'
import NavLink from './nav-link.sc'
import NavMenu from './nav-menu.sc'
import React from 'react'
import {Link} from 'react-router-dom'

const AppHeader = () => (
  <Header>
    <AppLogo>Amos</AppLogo>
    <NavMenu>
      <NavLink to="/search">Search</NavLink>
      <NavLink to="/review">Review</NavLink>
      <NavLink to="/proposals">Proposals</NavLink>
    </NavMenu>
    <Icons>
      <Link to="/notifications"><Icon src="bell"/></Link>
      <Link to="/profile"><Icon src="user"/></Link>
      <Link to="/settings"><Icon src="settings"/></Link>
    </Icons>
  </Header>
)

export default AppHeader
