import Top_ from './top.sc'
import Tail_ from './tail.sc'
import React from 'react'

const Bubble = ({size, children}) => (
  <Top_ size={size}>
    <Tail_/>
    {children}
  </Top_>
)

export default Bubble
