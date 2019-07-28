import Button from 'components/button'
import Panel from './panel.sc'
import React from 'react'
import {Link} from 'react-router-dom'

const AuthBox = () => (
  <Panel>
    <Button icon="facebook" width={'250px'}>Log in with Facebook</Button>
    <Button icon="google" width={'250px'}>Log in with Google</Button>
    <div>
      <Link to="/sign-up/email">Sign up</Link>
      &nbsp;
      {` • `}
      &nbsp;
      <Link to="/log-in">Log in</Link>
    </div>
  </Panel>
)

export default AuthBox
