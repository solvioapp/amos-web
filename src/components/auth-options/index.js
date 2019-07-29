import React from 'react'
import {Link} from 'react-router-dom'

const AuthOptions = ({first, second}) => {

  // default props
  
  if (!first) {
    first = {
      link: '/sign-up/email',
      text: 'Sign up'
    }
  }

  if (!second) {
    second = {
      link: '/log-in',
      text: 'Log in'
    }
  }

  return (
    <div>
      <Link to={first.link}>{first.text}</Link>
      &nbsp;
      {` • `}
      &nbsp;
      <Link to={second.link}>{second.text}</Link>
    </div>
  )
}

export default AuthOptions
