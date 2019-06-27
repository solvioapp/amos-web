import AmosChat from 'components/amos-chat'
import Button from 'components/button'
import Monolog from './monolog.sc'
import Panel from './panel.sc'
import React from 'react'
import {navto} from 'common/history'

const messages = [
  `Thanks for trusting me. 🤓`,
  `Now - let's get to work! 🖌 📚Go ahead and`,
]

const Success = () => (
  <Panel>
    <Monolog>
      <AmosChat>{messages}</AmosChat>
      <Button primary onClick={navto(`/review`)}>
        Submit review
      </Button>
    </Monolog>
  </Panel>
)

export default Success
