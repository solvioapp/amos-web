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

function LogIn({location, isAuthenticated, authorize, ...rest}) {
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
    <Top_ {...rest}>
      {/* <Title>Log in</Title> */}
      <AmosChat>
        {messages}
      </AmosChat>
      <Input state={state} id={'Input1'}>
        Email
      </Input>
      <Input state={state} type={`password`}>
        Password
      </Input>
      {/* TODO: Conditional show */}
      <AmosChat avatar={'none'}>
        I don't know that email, password combination. 🙁
      </AmosChat>
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
