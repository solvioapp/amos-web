import AmosChat from 'components/amos-chat'
import AuthBox from 'components/auth-box'
import Title from 'components/title'
import Panel from './panel.sc'
import React from 'react'
import {Auth} from 'constants/chat'

const Guest = () => (
  <Panel>
    <Title>Sign up</Title>
    <AmosChat messages={Auth.SignUp}/>
    <AuthBox/>
  </Panel>
)

export default Guest
