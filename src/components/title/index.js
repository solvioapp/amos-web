import Top_ from './top.sc'
import React from 'react'

const Title = ({children, ...rest}) => (
  <Top_ {...rest}>
    {children}
  </Top_>
)

export default Title