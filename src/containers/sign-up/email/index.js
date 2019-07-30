import AmosChat from 'components/amos-chat'
import Button from 'components/button'
import connect from './connect'
import Input from 'components/input'
import Checkbox from 'components/checkbox'
import Panel from 'components/panel'
import React, {useState} from 'react'
import AuthOptions from 'components/auth-options';

const Email = ({login}) => {
  const state = useState({email: `admin`, password: `123`})
  return (
    <Panel>
      <AmosChat>
        Once you sign up, you'll be able to get reputation for your Reviews. And it's free!
      </AmosChat>
      <Input state={state}>
        Email
        </Input>
      <Input state={state} type={'password'}>
        Password
      </Input>
      <Input state={state} type={'password'}>
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
    </Panel>
  )
}

export default connect(Email)
