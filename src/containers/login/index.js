import * as R from 'ramda'
import * as yup from 'yup'
import AmosChat from 'components/amos-chat'
import AuthOptions from 'components/auth-options'
import Button from 'components/button'
import Form from './form.sc'
import Input from 'components/input'
import Link from './link.sc'
import React from 'react'
import connect from './connect'
import useForm from "react-hook-form"
import {Redirect} from 'react-router-dom'

const url = R.pathOr(`/`, [`state`, `from`])

const defMessage = ({isSubmitted}) => (
  isSubmitted ? `It looks okey, let's login!` : `Welcome back! 🎊`
)

const validationSchema = yup.object().shape({
  email: yup.string().email().required(),
  password: yup.string().min(6).required(),
})

function LogIn(props) {
  const {location, isAuthenticated, authorize} = props
  const {register, errors, formState, handleSubmit} = useForm({validationSchema})

  const getMessages = R.pipe(
    R.merge(props.errors),
    R.values,
    R.pluck(`message`),
    R.when(
      R.isEmpty,
      R.append(defMessage(formState)),
    )
  )

  if (isAuthenticated) {
    return <Redirect to={url(location)}/>
  }

  return (
    <Form onSubmit={handleSubmit(authorize)}>
      <AmosChat>
        {getMessages(errors)}
      </AmosChat>
      <Input
        hasError={errors.email}
        label="Email"
        name="email"
        placeholder="Email"
        ref={register({required: true})}
      />
      <Input
        hasError={errors.password}
        label="Password"
        name="password"
        placeholder="Password"
        type="password"
        ref={register}
      />
      <Link to="/forgot-password">Forgot password</Link>
      <Button primary type="submit">
        Log in
      </Button>
      <AuthOptions
        first={{
          link: `/sign-up`,
          text: `Use social`
        }}
        second={{
          link: `/sign-up/email`,
          text: `Sign up`
        }}
      />
    </Form>
  )
}

export default connect(LogIn)
