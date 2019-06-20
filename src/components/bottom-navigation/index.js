import React from 'react'
import BottomNavigationDiv from './bottom-navigation.sc'
// import {Link} from 'react-router-dom'
import NavLink from '../header/nav-link.sc'


function BottomNavigationLinks() {


  return (
    <BottomNavigationDiv>
      <NavLink to="/search">Search</NavLink>
      <NavLink to="/review">Review</NavLink>
      <NavLink to="/proposals">Proposals</NavLink>
    </BottomNavigationDiv>
  )
}

export default BottomNavigationLinks