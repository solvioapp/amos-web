import image from './amos.gif'
import Bubble from './bubble'
import Top_ from './top.sc'
import Avatar_ from './avatar.sc'
import ChatFlow_ from './chat-flow.sc'
import React from 'react'

const toText = child => typeof child === 'function' ? child() : child

const toBubble = (child, key) => (
  <Bubble key={key}>{toText(child)}</Bubble>
)

const AmosChat = ({avatar = 'regular', children, callToAction, ...rest}) => {
  if (typeof children !== `object`) {
    // children is either a string or a function, not an array
     children = [children]
  }

  return (
    <Top_ {...rest}>
      {avatar !== 'none' && <Avatar_ size={avatar} src={image}/>}
      <ChatFlow_ size={avatar}>
        <Bubble>{toText(children[0])}</Bubble>
        {children.slice(1).map(toBubble)}
        {callToAction}
      </ChatFlow_>
    </Top_>
  )
}

export default AmosChat
