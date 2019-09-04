import AmosChat from 'components/amos-chat'
import Button from 'components/button'
import Title from 'components/title'
import Top_ from '../top.sc'
import InputForm_ from '../input-form.sc'
import {navto} from 'common/history'
import LinkURLS from './LinkURLs'
import React from 'react'

const messages = [
  `Help me link the world's knowledge! You can submit reviews for online learning resources.
   If other people agree with your review, you will gain Rep. 😎
  `,
  `Let's start with the links. Please enter the  URLs that lead to the resource 😇`
]

const Authorized = ({rest}) => (
  <Top_ {...rest}>
    <AmosChat>{messages}</AmosChat>
    <InputForm_>
      <Title>Links</Title>
      <LinkURLS/>
      <Button primary onClick={navto(`/review/topics`)}>
        Next
      </Button>
    </InputForm_>
  </Top_>
)

export default Authorized
