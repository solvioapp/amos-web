import Button from 'components/button'
import Panel from './panel.sc'
import React from 'react'
import {Link} from 'react-router-dom'

const AuthBox = () => (
  <Panel>
    <Button icon="facebook">Log in with Facebook</Button>
    <Button icon="google">Log in with Google</Button>
    <div>
      <Link to="/sign-up/email">Sign up</Link>
      {` • `}
      <Link to="/log-in">Log in</Link>
    </div>
  </Panel>
)

export default AuthBox
