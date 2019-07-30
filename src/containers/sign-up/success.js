import AmosChat from 'components/amos-chat'
import Button from 'components/button'
import Monolog from './monolog.sc'
import Top_ from './top.sc'
import React from 'react'
import {navto} from 'common/history'

const messages = [
  `Nice to meet you too 😴`,
  () => <span>Now - let's get to work! 🖌 📚 <br/> Go ahead and ...</span>,
]

const Success = () => (
  <Top_>
    <Monolog>
      <AmosChat>{messages}</AmosChat>
      <Button primary onClick={navto(`/review`)}>
        Submit review
      </Button>
    </Monolog>
  </Top_>
)

export default Success
