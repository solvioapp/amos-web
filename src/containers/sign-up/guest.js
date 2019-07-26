import AmosChat from 'components/amos-chat'
import AuthBox from 'components/auth-box'
import Panel from './panel.sc'
import React from 'react'
import Title from 'components/title'

const Guest = () => (
  <Panel>
    <Title>Sign up</Title>
    <AmosChat>
      Once you sign up, you'll be able to get reputation for your Reviews. And it's free!
    </AmosChat>
    <AuthBox/>
  </Panel>
)

export default Guest
