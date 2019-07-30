import AmosChat from 'components/amos-chat'
import AuthBox from 'components/auth-box'
import Top_ from 'components/panel'
import React from 'react'
import Title from 'components/title'

const Guest = () => (
  <Top_>
    {/* <Title>Sign up</Title> */}
    <AmosChat>
      Once you sign up, you'll be able to get reputation for your Reviews. And it's free!
    </AmosChat>
    <AuthBox/>
  </Top_>
)

export default Guest
