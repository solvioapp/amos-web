import AmosChat from 'components/amos-chat'
import AuthBox from 'components/auth-box'
import Top_ from './top.sc'
import React from 'react'

const messages = [
  `👋 I'm Amos. I was created to be "the best learning mentor in the world".`,
  `For now I'm trying to sort the web's learning resources. Then in the future I'll be able to show you learning paths on any topic, tailored to your requirements.`,
  `So I need your help! Create an account and submit reviews for your favorite learning resources. Vamos, amigo! 🤗`,
]

const Guest = ({...rest}) => (
  <Top_ columns={'two'} {...rest}>
    <AmosChat avatar={'large'}>
      {messages}
    </AmosChat>
    <AuthBox/>
  </Top_>
)

export default Guest
