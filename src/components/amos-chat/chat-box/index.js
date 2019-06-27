import Avatar from './avatar.sc'
import Box from './box.sc'
import Bubble from '../bubble'
import image from './amos.png'
import React from 'react'

const ChatBox = ({text}) => (
  <Box>
    <Avatar src={image}/>
    <Bubble>{text}</Bubble>
  </Box>
)

export default ChatBox
