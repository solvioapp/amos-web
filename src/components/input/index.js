import React from 'react'
import Panel from './panel.sc'
import Input from './input.sc'
import Label from './label.sc'

const AppInput = ({children}) => (
  <Panel>
    <Label>{children}</Label>
    <Input placeholder={children}/>
  </Panel>
)

export default AppInput