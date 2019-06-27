import Button from 'components/button'
import Panel from './panel.sc'
import React from 'react'
import {Link} from 'react-router-dom'

const AuthBox = () => (
  <Panel>
    <Button icon="facebook">Continue with Facebook</Button>
    <Button icon="google">Continue with Google</Button>
    <p>OR</p>
    <div>
      <Link to="/sign-up/email">Sign up with email</Link>
      {` • `}
      <Link to="/log-in">Log in with email</Link>
    </div>
  </Panel>
)

export default AuthBox
