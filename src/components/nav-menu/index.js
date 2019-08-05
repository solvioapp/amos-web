import * as R from 'ramda'
import Top_ from './top.sc'
import Link_ from './link.sc'
import React from 'react'
import {withRouter} from 'react-router-dom'

const isLogin = R.pathEq([
  `history`, `location`, `pathname`
], `/login`)

const NavMenu = ({isAuthenticated, ...props}) => (
  <Top_ {...props}>
    <Link_ to="/review">
      Review
    </Link_>
    <Link_ to="/search">
      Search
    </Link_>
    <Link_ to="/notifications" hidden={true}>
      Notifications
    </Link_>
    <Link_ to="/profile" hidden={!isAuthenticated}>
      Profile
    </Link_>
    <Link_ to="/sign-up" hidden={isAuthenticated || isLogin(props)}>
      Sign up
    </Link_>
    <Link_ to='/login' hidden={isAuthenticated || !isLogin(props)}>
      Log in
    </Link_>
  </Top_>
)

export default withRouter(NavMenu)
