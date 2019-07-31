import AmosChat from 'components/amos-chat'
import Button from 'components/button'
import Input from 'components/input'
import Top_ from '../top.sc'
import React from 'react'
import Title from 'components/title'
import {navto} from 'common/history'

const messages = [
  `Help me link the world's knowledge! You can submit reviews for online learning resources.
   If other people agree with your review, you will gain Rep. 😎
  `,
  `Let's start with the links. Please enter the  URLs that lead to the resource 😇`
]

const Authorized = ({rest}) => (
  <Top_ columns={'left'} {...rest}>
    <AmosChat>{messages}</AmosChat>
    <Title>Links</Title>
    <Input/>
    <Button primary onClick={navto(`/review/topics`)}>
      Next
    </Button>
  </Top_>
)

export default Authorized
