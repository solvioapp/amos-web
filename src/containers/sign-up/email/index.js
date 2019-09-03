import AmosChat from 'components/amos-chat'
import Button from 'components/button'
import connect from './connect'
import Input from 'components/input'
import Checkbox from 'components/checkbox'
import Top_ from '../top.sc'
import React, {useState, useMemo, useRef} from 'react'
import AuthOptions from 'components/auth-options'
import {path, pipe} from 'ramda'

const getTargetValue = path([`target`, `value`])
const pipeTValueTo = cb => pipe(getTargetValue, cb)

const Email = ({login, ...rest}) => {
  const [email, setEmailState] = useState(``)
  const [password, setPasswordState] = useState(``)
  const [repeatPass, setRepeatPassState] = useState(``)

  const {setPassword, setEmail, setRepeatPass} = useMemo(() => ({
    setPassword: pipeTValueTo(setPasswordState),
    setEmail: pipeTValueTo(setEmailState),
    setRepeatPass: pipeTValueTo(setRepeatPassState),
  }), [])

  const signupUser = event => {
    event.preventDefault()

    const userData = {email, password}
    console.log(`Signing up user`, userData)
  }

  const repeatPassErr = useMemo(() => {
    return password && repeatPass && password !== repeatPass && `Passwords must match`
  }, [password, repeatPass])

  const form = useRef()
  const validForm = form.current ? form.current.checkValidity() && !repeatPassErr : false

  return (
    <Top_ {...rest}>
      <AmosChat>
        Once you sign up, you'll be able to get reputation for your Reviews. And it's free!
      </AmosChat>
      <form onSubmit={signupUser} ref={form}>
        <Input type="email" onChange={setEmail} required>
          Email
        </Input>
        <Input type="password" onChange={setPassword} required minLength="6">
          Password
        </Input>
        <Input type="password" onChange={setRepeatPass} required minLength="6">
          Repeat password
        </Input>
        {repeatPassErr && <AmosChat avatar="none">
          Hey, the passwords don't seem to match. Good we caught that now!
        </AmosChat>}
        <Checkbox>
          Subscribe to Solvio Monthly
        </Checkbox>
        <Button primary onClick={login} width="150px" type="submit" disabled={!validForm}>
          Sign up
        </Button>
      </form>
      <AuthOptions first={{
        link: `/sign-up`,
        text: `Use social`
      }} />
    </Top_>
  )
}

export default connect(Email)
