import AmosChat from 'components/amos-chat'
import Button from 'components/button'
import Top_ from '../top.sc'
import {navto} from 'common/history'
import React from 'react'

const Authorized = ({...rest}) => {
  const messages = [
    () => <span>Thank you 🙂️ Smarter every day!<br/>I'll let you know if you get Rep for that review ✌️</span>,
  ]
  return (
    <Top_ {...rest}>
      <AmosChat callToAction={
        <Button primary onClick={navto(`/review/links`)}>
          Submit another Review
        </Button>
      }>
        {messages}
      </AmosChat>
    </Top_>
  )
}

export default Authorized
