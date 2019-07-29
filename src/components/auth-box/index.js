import Button from 'components/button'
import Panel from './panel.sc'
import React from 'react'
import {Link} from 'react-router-dom'
import AuthOptions from 'components/auth-options'

const AuthBox = () => (
  <Panel>
    <Button icon="facebook" width={'250px'}>Continue with Facebook</Button>
    <Button icon="google" width={'250px'}>Continue with Google</Button>
    <AuthOptions/>
  </Panel>
)

export default AuthBox
