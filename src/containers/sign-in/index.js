import * as R from 'ramda'
import React from 'react'
import connect from './connect'
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
    <input
      placeholder={name}
      type={type}
      value={state[name]}
      onChange={onChange}
    />
  )
}

function SignIn({authorize, isAuthenticated, history}) {
  if (isAuthenticated === true) {
    window.requestAnimationFrame(() =>
      history.push(`/`)
    )
    return <div>Redirecting...</div>
  }
  const state = useState({email: `admin`, password: ``})
  const input = makeInput(state)
  const onSubmit = event => {
    event.preventDefault()
    const [{email, password}] = state
    authorize(email, password)
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
