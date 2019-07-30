import connect from './connect'
import {messages} from './constants'
import AmosChat from 'components/amos-chat'
import Button from 'components/button'
import Input from 'components/input'
import Title from 'components/title'
import AuthOptions from 'components/auth-options'
import Top_ from './top.sc'
import React, {useState} from 'react'
import {Redirect} from 'react-router-dom'
import * as R from 'ramda'


const url = R.pathOr(`/`, [`state`, `from`])

function LogIn({location, isAuthenticated, authorize}) {
  if (isAuthenticated) {
    return <Redirect to={url(location)}/>
  }

  const state = useState({email: `admin`, password: `123`})

  const onSubmit = event => {
    event.preventDefault()
    const [{email, password}] = state
    authorize(email, password)
  }

  return (
    <Top_>
      {/* <Title>Log in</Title> */}
      <AmosChat>
      {messages}
      </AmosChat>
      <Input state={state}>
        Email
      </Input>
      <Input state={state} type={`password`}>
        Password
      </Input>
      <Button primary onClick={onSubmit}>
        Log in
      </Button>
      <AuthOptions
        first={{
          link: '/sign-up',
          text: 'Use social'
        }}
        second={{
          link: '/sign-up/email',
          text: 'Sign up'
        }}/>
    </Top_>
  )
}

export default connect(LogIn)
