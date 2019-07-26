import ChatBox from './chat-box'
import ChatFlow from './chat-flow.sc'
import React from 'react'

const toChatBox = (text, key) => (
  // Not passing in `avatar` will mean no avatar will be shown
  <ChatBox key={key} text={text}/>
)

function AmosChat({avatar, children}) {
  if (typeof children === `string`) {
    return <ChatBox avatar={avatar || 'regular'} text={children}/>
  }

  return (
    <ChatFlow>
      <ChatBox avatar={avatar || 'large'} text={children[0]}/>
      {children.slice(1).map(toChatBox)}
    </ChatFlow>
  )
}

export default AmosChat
