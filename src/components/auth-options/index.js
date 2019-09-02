import Top_ from './top.sc'
import React from 'react'
import {Link} from 'react-router-dom'

const AuthOptions = ({
  first = {
    link: '/sign-up/email',
    text: 'Sign up'
  }, 
  second = {
    link: '/login',
    text: 'Log in'
  }
}, ...rest) => {

  return (
    <Top_ {...rest}>
      <Link to={first.link}>{first.text}</Link>
      &nbsp;
      {` • `}
      &nbsp;
      <Link to={second.link}>{second.text}</Link>
    </Top_>
  )
}

export default AuthOptions
