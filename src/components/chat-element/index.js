import React from 'react';
import Layout from './layout.sc'
import AmosPortrait from './amos-portrait';
import ChatBox from './chat-box.sc'

const ChatElement = props => (
  <Layout>
    <AmosPortrait big={ props.big } />
    <ChatBox big={ props.big }>{ props.children }</ChatBox>
  </Layout>
)

export default ChatElement