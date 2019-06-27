import AmosChat from 'components/amos-chat'
import AuthBox from 'components/auth-box'
import Button from 'components/button'
import Monolog from './monolog.sc'
import Panel from './panel.sc'
import React from 'react'
import {navto} from 'common/history'

const Guest = () => (
  <Panel>
    <Monolog>
      <AmosChat>
        Here you can add reviews for online learning resources - either anonymously or
        by signing up. I would recommended signing up first because then you can get reputation
        for your reviews. 🙂
      </AmosChat>
      <Button primary onClick={navto(`/review/links`)}>
        Submit anonymously
      </Button>
    </Monolog>
    <AuthBox/>
  </Panel>
)

export default Guest
