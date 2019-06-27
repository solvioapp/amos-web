import AmosChat from 'components/amos-chat'
import AuthBox from 'components/auth-box'
import Button from 'components/button'
import Panel from '../panel.sc'
import Monolog from '../monolog.sc'
import React from 'react'
import {Review} from 'constants/chat'
import {navto} from 'common/history'

const Guest = () => (
  <Panel>
    <Monolog>
      <AmosChat messages={Review.ThanksGuest}/>
      <Button primary onClick={navto(`/`)}>
        Submit anonymously
      </Button>
    </Monolog>
    <AuthBox/>
  </Panel>
)

export default Guest
