import AmosChat from 'components/amos-chat'
import Button from 'components/button'
import Title from 'components/title'
import Input from 'components/input'
import Monolog from '../monolog.sc'
import React from 'react'
import {navto} from 'common/history'

const messages = [
  `Help me link the world's knowledge! You can submit reviews for online learning resources.
   If other people agree with your review, you will gain Rep. 😎
  `,
  `Let's start with the links. Please enter the  URLs that lead to the resource 😇`
]

const Authorized = () => (
  <Monolog>
    <AmosChat>{messages}</AmosChat>
    <Title>Links</Title>
    <Input/>
    <Button primary onClick={navto(`/review/topics`)}>
      Next
    </Button>
  </Monolog>
)

export default Authorized
