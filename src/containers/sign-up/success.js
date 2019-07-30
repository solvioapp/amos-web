import AmosChat from 'components/amos-chat'
import Button from 'components/button'
import Monolog from './monolog.sc'
import Top_ from 'components/panel'
import React from 'react'
import {navto} from 'common/history'

const messages = [
  `Thanks for trusting me. 🤓`,
  `Now - let's get to work! 🖌 📚Go ahead and`,
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
