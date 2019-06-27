import AmosChat from 'components/amos-chat'
import Button from 'components/button'
import Title from 'components/title'
import Input from 'components/input'
import Monolog from '../monolog.sc'
import React from 'react'
import {Review} from 'constants/chat'
import {navto} from 'common/history'

const Guest = () => (
  <Monolog>
    <AmosChat messages={Review.Links}/>
    <Title>Links</Title>
    <Input />
    <Button primary onClick={navto(`/review/topics`)}>
      Next
    </Button>
  </Monolog>
)

export default Guest
