import AmosChat from 'components/amos-chat'
import AuthBox from 'components/auth-box'
import Monolog from './monolog.sc'
import Panel from './panel.sc'
import React from 'react'

const messages = [
  `👋 I'm Amos. I was created to be "the best learning mentor in the world".`,
  `For now I'm trying to sort the web's learning resources. Then in the future I'll be able to show you learning paths on any topic, tailored to your requirements.`,
  `So I need your help! Create an account and submit reviews for your favorite learning resources. Vamos, amigo! 🤗`,
]

const Guest = () => (
  <Panel>
    <Monolog>
      <AmosChat>
        {messages}
      </AmosChat>
    </Monolog>
    <AuthBox/>
  </Panel>
)

export default Guest
