import Input_ from './input.sc'
import Label_ from './label.sc'
import React from 'react'
import Top_ from './top.sc'

const Input = ({label, children, ...props}, ref) => (
  <Top_>
    <Label_>{label}</Label_>
    <Input_
      ref={ref}
      placeholder={typeof children === `string` ? children : ``}
      {...props}
    />
  </Top_>
)

export default React.forwardRef(Input)
