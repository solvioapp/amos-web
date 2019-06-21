import * as R from 'ramda'
import React from 'react'
import connect from './connect'
import {useState} from 'react'
import {Redirect} from 'react-router-dom'

const makeInput = ([state, setState]) => (name, type) => {
  const onChange = event => {
    const newState = R.merge(
      state,
      {[name]: event.target.value}
    )
    setState(newState)
  }
  return (
    <input
      placeholder={name}
      type={type}
      value={state[name]}
      onChange={onChange}
    />
  )
}

const url = R.pathOr(`/`, [`location`, `state`, `from`])

function SignIn(props) {
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
    <div>
      <h1>Fake login form</h1>
      <p>
        Purpose of this form is to test PrivateRoute.<br/>
        Use password <code>123</code> to sign in.
      </p>
      <form onSubmit={onSubmit}>
        {input(`email`, `text`)}
        {input(`password`, `password`)}<br/><br/>
        <input type="submit" value="SIGN IN"/>
      </form>
    </div>
  )
}

export default connect(SignIn)
