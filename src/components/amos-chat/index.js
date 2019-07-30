import image from './amos.gif'
import Bubble from './bubble'
import Top_ from './top.sc'
import Avatar_ from './avatar.sc'
import ChatFlow_ from './chat-flow.sc'
import React from 'react'

const toBubble = (text, key) => (
  <Bubble key={key}>{typeof text === 'function' ? text() : text}</Bubble>
)

const AmosChat = ({avatar = 'regular', children}) => {
  if (typeof children === `string`) {
     children = [children]
  }

  return (
    <Top_>
      {avatar !== 'none' && <Avatar_ size={avatar} src={image}/>}
      <ChatFlow_>
        <Bubble size={avatar}>{children[0]}</Bubble>
        {children.slice(1).map(toBubble)}
      </ChatFlow_>
    </Top_>
  )
}

export default AmosChat
