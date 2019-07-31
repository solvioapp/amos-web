import AmosChat from 'components/amos-chat'
import Button from 'components/button'
import Buttons from '../buttons.sc'
import Input from 'components/input'
import Top_ from '../top.sc'
import React from 'react'
import Title from 'components/title'
import {navto} from 'common/history'

const messages = [
  `What topics is the resource on? Try to be as specific as possible to get the most Rep.`,
  `Btw, your submissions will be private for now. 🕵🏼‍`
]

const Authorized = ({...rest}) => (
  <Top_ {...rest}>
    <AmosChat>
      {messages}
    </AmosChat>
    <Title>Topics</Title>
    <Input />
    <Buttons>
      <Button onClick={navto(`/review/links`)}>
        Previous
      </Button>
      <Button primary onClick={navto(`/review/requirements`)}>
        Next
      </Button>
      <Button>
        Finish
      </Button>
    </Buttons>
  </Top_>
)

export default Authorized
