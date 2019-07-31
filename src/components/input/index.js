import React from 'react'
import Top_ from './top.sc'
import Input_ from './input.sc'
import Label_ from './label.sc'
import * as R from 'ramda'

const Input = ({state: [state, setState] = [{}], children: name, type = 'text', ...rest}) => {
  const onChange = event => {
    const newState = R.merge(
      state,
      {[name]: event.target.value}
    )
    setState(newState)
  }

  return (
    <Top_ {...rest}>
      <Label_>{name}</Label_>
      <Input_ 
        placeholder={name}
        type={type}
        value={state[name]}
        onChange={onChange}
      />
    </Top_>
  )
}

export default Input