import * as R from 'ramda'
import AmosChat from 'components/amos-chat'
import Button from 'components/button'
import Input from 'components/input'
import Panel from './panel.sc'
import React from 'react'
import Title from 'components/title'
import connect from './connect'
import {Auth} from 'constants/chat'
import {Redirect} from 'react-router-dom'
import {useState} from 'react'

const makeInput = ([state, setState]) => (name, type) => {
  const onChange = event => {
    const newState = R.merge(
      state,
      {[name]: event.target.value}
    )
    setState(newState)
  }
  return (
    <Input
      placeholder={name}
      type={type}
      value={state[name]}
      onChange={onChange}
    />
  )
}

const url = R.pathOr(`/`, [`location`, `state`, `from`])
const messages = [
  ...Auth.LogIn,
  `Purpose of this form is to test PrivateRoute. Use password 123 to sign in`
]

function LogIn(props) {
  if (props.isAuthenticated) {
    return <Redirect to={url(props)}/>
  }

  const state = useState({email: `admin`, password: `123`})
  const input = makeInput(state)
  const onSubmit = event => {
    event.preventDefault()
    const [{email, password}] = state
    props.authorize(email, password)
  }

  return (
    <Panel>
      <Title>Log in</Title>
      <AmosChat messages={messages}/>
      {input(`email`, `text`)}
      {input(`password`, `password`)}<br/><br/>
      <Button primary onClick={onSubmit}>LOG IN</Button>
    </Panel>
  )
}

export default connect(LogIn)
