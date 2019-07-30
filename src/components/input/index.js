import React from 'react'
import Panel from './panel.sc'
import Input from './input.sc'
import Label from './label.sc'
import * as R from 'ramda'

const AppInput = ({state: [state, setState], children: name, type = 'text'}) => {
  const onChange = event => {
    const newState = R.merge(
      state,
      {[name]: event.target.value}
    )
    setState(newState)
  }

  return (
    <Panel>
      <Label>{name}</Label>
      <Input 
        placeholder={name}
        type={type}
        value={state[name]}
        onChange={onChange}
      />
    </Panel>
  )
}

export default AppInput