import React from 'react';
import AmosChat from './amos-chat'
import Box from './box.sc'
import Avatar from './avatar.sc'
import image from './amos.gif'

const Monolog = ({avatar, children}) => (
  <Box>
    {avatar && <Avatar size={avatar} src={image}/>}
    <AmosChat size={avatar}>{children}</AmosChat>
  </Box>
)

export default Monolog