import Top from './top.sc'
import Checkbox_ from './checkbox.sc'
import React from 'react'

const Checkbox = ({children}) => (
  <Top>
    <Checkbox_ checkboxSize={20} checkboxBorderSize={2}>
      <input type="checkbox" defaultChecked/>
    </Checkbox_>
    {children}
  </Top>
)

export default Checkbox