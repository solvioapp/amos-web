import Box from './box.sc'
import Avatar from './avatar.sc'
import Bubble from './bubble'
import ChatFlow from './chat-flow.sc'
import React from 'react'
import image from './amos.gif'

const toBubble = (text, key) => (
  <Bubble key={key}>{text}</Bubble>
)

function AmosChat({avatar, children}) {
  if (typeof children === `string`) {
     children = [children]
  }

  avatar = avatar || 'regular'

  return (
    <Box>
      <Avatar size={avatar} src={image}/>
      <ChatFlow>
        <Bubble size={avatar}>{children[0]}</Bubble>
        {children.slice(1).map(toBubble)}
      </ChatFlow>
    </Box>
  )
}

export default AmosChat
