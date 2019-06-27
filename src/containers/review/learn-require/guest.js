import AmosChat from 'components/amos-chat'
import Button from 'components/button'
import Buttons from '../buttons.sc'
import Title from 'components/title'
import Input from 'components/input'
import Monolog from '../monolog.sc'
import React from 'react'
import {Review} from 'constants/chat'
import {navto} from 'common/history'

const Guest = () => (
  <Monolog>
    <Title>Learning requirements</Title>
    <AmosChat messages={Review.Requirements}/>
    <Input />
    <Buttons>
      <Button onClick={navto(`/review/topics`)}>
        Previous
      </Button>
      <Button primary onClick={navto(`/review/thanks`)}>
        Finish
      </Button>
    </Buttons>
  </Monolog>
)

export default Guest
