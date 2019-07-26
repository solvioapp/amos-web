import AmosChat from 'components/amos-chat'
import Button from 'components/button'
import connect from './connect'
import Input from 'components/input'
import Checkbox from 'components/checkbox'
import Panel from '../panel.sc'
import React from 'react'

const Email = ({login}) => (
  <Panel>
    <AmosChat>
      Once you sign up, you'll be able to get reputation for your Reviews. And it's free!
    </AmosChat>
    <Input>Email</Input>
    <Input>Password</Input>
    <Input>Repeat password</Input>
    <Checkbox>Subscribe to Solvio Monthly</Checkbox>
    <Button primary onClick={login} width={'150px'}>
      Sign up
    </Button>
  </Panel>
)

export default connect(Email)
