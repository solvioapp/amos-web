import AmosChat from 'components/amos-chat'
import Button from 'components/button'
import connect from './connect'
import Input from 'components/input'
import Panel from '../panel.sc'
import React from 'react'
import Title from 'components/title'

const Email = ({login}) => (
  <Panel>
    <Title>Sign up</Title>
    <AmosChat>
      Once you sign up, you'll be able to get reputation for your Reviews. And it's free!
    </AmosChat>
    <Input/>
    <Input/>
    <Input/>
    <Button primary onClick={login}>
      Sign up
    </Button>
  </Panel>
)

export default connect(Email)
