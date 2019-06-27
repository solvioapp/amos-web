import ChatBox from './chat-box'
import ChatFlow from './chat-flow.sc'
import React from 'react'

const toChatBox = (text, key) => (
  <ChatBox key={key} text={text}/>
)

function AmosChat({children}) {
  if (typeof children === `string`) {
    return <ChatBox text={children}/>
  }

  return (
    <ChatFlow>
      {children.map(toChatBox)}
    </ChatFlow>
  )
}

export default AmosChat
