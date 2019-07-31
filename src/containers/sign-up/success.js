import AmosChat from 'components/amos-chat'
import Button from 'components/button'
import Top_ from './top.sc'
import React from 'react'
import {navto} from 'common/history'

const messages = [
  `Nice to meet you too 😴`,
  () => <span>Now - let's get to work! 🖌 📚<br/>Go ahead and ...</span>,
]

const Success = ({...rest}) => (
  <Top_ {...rest}>
    <AmosChat>{messages}</AmosChat>
    <Button primary onClick={navto(`/review`)}>
      Submit a Review
    </Button>
  </Top_>
)

export default Success
