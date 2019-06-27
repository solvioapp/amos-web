import AmosChat from 'components/amos-chat'
import Button from 'components/button'
import connect from './connect'
import Title from 'components/title'
import Input from 'components/input'
import Panel from '../panel.sc'
import React from 'react'
import {Auth} from 'constants/chat'

const Email = ({login}) => (
  <Panel>
    <Title>Sign up</Title>
    <AmosChat messages={Auth.SignUp}/>
    <Input/>
    <Input/>
    <Input/>
    <Button primary onClick={login}>
      Sign up
    </Button>
  </Panel>
)

export default connect(Email)
