import AmosChat from 'components/amos-chat'
import Top_ from '../top.sc'
import React from 'react'

const Authorized = ({...rest}) => {
  const messages = [
    () => <span>Thank you 🙂️ Smarter every day!<br/>I'll let you know if you get Rep for that review ✌️</span>,
  ]
  return (
    <Top_ {...rest}>
      <AmosChat>
        {messages}
      </AmosChat>
    </Top_>
  )
}

export default Authorized
