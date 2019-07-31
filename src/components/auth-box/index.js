import Button from 'components/button'
import AuthOptions from 'components/auth-options'
import Top_ from './top.sc'
import {Link} from 'react-router-dom'
import React from 'react'

const AuthBox = ({...rest}) => (
  <Top_ {...rest}>
    <Button icon="facebook" width={'250px'}>Continue with Facebook</Button>
    <Button icon="google" width={'250px'}>Continue with Google</Button>
    <AuthOptions/>
  </Top_>
)

export default AuthBox
