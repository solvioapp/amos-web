import React from 'react';
import {Link} from 'react-router-dom'
import Aux from 'components/aux'

const AuthBox = props => (
  <Aux>
    <button>Continue with Facebook</button>
    <button>Continue with Google</button>
    <p>OR</p>
    <div>
      <Link to="/sign-up/email">Sign up with email</Link>
      {` • `}
      <Link to="/log-in">Log in with email</Link>
    </div>
  </Aux>
)

export default AuthBox