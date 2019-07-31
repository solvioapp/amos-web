import Top_ from './top.sc'
import Tail_ from './tail.sc'
import React from 'react'

const Bubble = ({children}) => (
  <Top_>
    <Tail_/>
    {children}
  </Top_>
)

export default Bubble
