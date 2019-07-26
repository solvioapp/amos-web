import Bubble from './bubble'
import ChatFlow from './chat-flow.sc'
import React from 'react'

const toBubble = (text, key) => (
  <Bubble key={key}>{text}</Bubble>
)

function AmosChat({size, children}) {
  if (typeof children === `string`) {
    return <Bubble>{children}</Bubble>
  }

  return (
    <ChatFlow>
      <Bubble size={size}>{children[0]}</Bubble>
      {children.slice(1).map(toBubble)}
    </ChatFlow>
  )
}

export default AmosChat
