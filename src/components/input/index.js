import React from 'react'
import Panel from './panel.sc'
import Input from './input.sc'
import Label from './label.sc'

const AppInput = ({text}) => (
  <Panel>
    <Label>{text}</Label>
    <Input placeholder={text}/>
  </Panel>
)

export default AppInput