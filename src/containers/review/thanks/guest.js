import AmosChat from 'components/amos-chat'
import AuthBox from 'components/auth-box'
import Button from 'components/button'
import Panel from '../panel.sc'
import Monolog from '../monolog.sc'
import React from 'react'
import {navto} from 'common/history'

const messages = [
  `Thanks for the review!`,
  `This is the last chance to get Reputation for this fantastic review by signing up. 🤟`,
]

const Guest = () => (
  <Panel>
    <Monolog>
      <AmosChat>{messages}</AmosChat>
      <Button primary onClick={navto(`/`)}>
        Submit anonymously
      </Button>
    </Monolog>
    <AuthBox/>
  </Panel>
)

export default Guest
