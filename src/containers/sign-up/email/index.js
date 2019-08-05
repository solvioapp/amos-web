import AmosChat from 'components/amos-chat'
import Button from 'components/button'
import connect from './connect'
import Input from 'components/input'
import Checkbox from 'components/checkbox'
import Top_ from '../top.sc'
import React, {useState} from 'react'
import AuthOptions from 'components/auth-options';

const Email = ({login, ...rest}) => {
  const state = useState({email: `admin`, password: `123`})
  return (
    <Top_ {...rest}>
      <AmosChat>
        Once you sign up, you'll be able to get reputation for your Reviews. And it's free!
      </AmosChat>
      <Input>
        Email
      </Input>
      <Input type={'password'}>
        Password
      </Input>
      <Input type={'password'}>
        Repeat password
      </Input>
      {/* TODO: Conditional show */}
      <AmosChat avatar={'none'}>
        Hey, the passwords don't seem to match. Good we caught that now!
      </AmosChat>
      <Checkbox>
        Subscribe to Solvio Monthly
      </Checkbox>
      <Button primary onClick={login} width={'150px'}>
        Sign up
      </Button>
      <AuthOptions first={{
        link: '/sign-up',
        text: 'Use social'
      }}/>
    </Top_>
  )
}

export default connect(Email)
