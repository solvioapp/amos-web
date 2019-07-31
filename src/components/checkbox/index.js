import Top_ from './top.sc'
import Checkbox_ from './checkbox.sc'
import React from 'react'

const Checkbox = ({children, ...rest}) => (
  <Top_ {...rest}>
    <Checkbox_ checkboxSize={20} checkboxBorderSize={2}>
      <input type="checkbox" defaultChecked/>
    </Checkbox_>
    {children}
  </Top_>
)

export default Checkbox