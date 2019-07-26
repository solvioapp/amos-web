import AmosChat from 'components/amos-chat'
import Button from 'components/button'
import connect from './connect'
import TextInput from 'components/input'
import Panel from '../panel.sc'
import React from 'react'

const Email = ({login}) => (
  <Panel>
    <AmosChat>
      Once you sign up, you'll be able to get reputation for your Reviews. And it's free!
    </AmosChat>
    <Input text={'Email'}/>
    <Input text={'Password'}/>
    <Input text={'Repeat password'}/>

    <Button primary onClick={login} width={'150px'}>
      Sign up
    </Button>
  </Panel>
)

export default connect(Email)
