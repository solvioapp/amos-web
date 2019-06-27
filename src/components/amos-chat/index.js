import ChatBox from './chat-box'
import ChatFlow from './chat-flow.sc'
import React from 'react'

const toChatBox = (text, key) => (
  <ChatBox key={key} text={text}/>
)

const AmosChat = ({messages}) => (
  <ChatFlow>
    {messages.map(toChatBox)}
  </ChatFlow>
)

export default AmosChat
