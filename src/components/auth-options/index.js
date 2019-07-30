import React from 'react'
import {Link} from 'react-router-dom'
import AuthOptions from './auth-options.sc'

const AppAuthOptions = ({
  first = {
    link: '/sign-up/email',
    text: 'Sign up'
  }, 
  second = {
    link: '/log-in',
    text: 'Log in'
  }
}) => {

  return (
    <AuthOptions>
      <Link to={first.link}>{first.text}</Link>
      &nbsp;
      {` • `}
      &nbsp;
      <Link to={second.link}>{second.text}</Link>
    </AuthOptions>
  )
}

export default AppAuthOptions
