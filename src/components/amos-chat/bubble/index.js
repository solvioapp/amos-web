import Cloud from './cloud.sc'
import React from 'react'
import Tail from './tail.sc'

const Bubble = ({children}) => (
  <Cloud>
    <Tail/>
    {children}
  </Cloud>
)

export default Bubble
