import AmosChat from 'components/amos-chat'
import AuthBox from 'components/auth-box'
import Button from 'components/button'
import Top_ from '../top.sc'
import React from 'react'
import {navto} from 'common/history'

const messages = [
  `Thanks for the review!`,
  `This is the last chance to get Reputation for this fantastic review by signing up. 🤟`,
]

const Guest = () => (
  <Top_ columns={'two'}>
    <Top_ columns={'left'}>
      <AmosChat>{messages}</AmosChat>
      <Button primary onClick={navto(`/`)}>
        Submit anonymously
      </Button>
    </Top_>
    <AuthBox/>
  </Top_>
)

export default Guest
