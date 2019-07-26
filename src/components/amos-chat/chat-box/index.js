import Avatar from './avatar.sc'
import Box from './box.sc'
import Bubble from '../bubble'
import React from 'react'
// import image from './amos.png'
import image from './amos.gif'

const ChatBox = ({text}) => (
  <Box>
    <Avatar src={image}/>
    <Bubble>{text}</Bubble>
  </Box>
)

export default ChatBox
