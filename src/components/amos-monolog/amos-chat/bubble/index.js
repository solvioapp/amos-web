import Cloud from './cloud.sc'
import React from 'react'
import Tail from './tail.sc'

const Bubble = ({size, children}) => {
  console.log('size', size)
  return (
  <Cloud size={size}>
    <Tail/>
    {children}
  </Cloud>
  )
}

export default Bubble
