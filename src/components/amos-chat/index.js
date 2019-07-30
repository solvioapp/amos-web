import AmosChat_ from './amos-chat.sc'
import Avatar from './avatar.sc'
import Bubble from './bubble'
import ChatFlow from './chat-flow.sc'
import React from 'react'
import image from './amos.gif'

const toBubble = (text, key) => (
  <Bubble key={key}>{text}</Bubble>
)

const AmosChat = ({avatar = 'regular', children}) => {
  if (typeof children === `string`) {
     children = [children]
  }

  return (
    <AmosChat_>
      {avatar !== 'none' && <Avatar size={avatar} src={image}/>}
      <ChatFlow>
        <Bubble size={avatar}>{children[0]}</Bubble>
        {children.slice(1).map(toBubble)}
      </ChatFlow>
    </AmosChat_>
  )
}

export {AmosChat_}
export default AmosChat
