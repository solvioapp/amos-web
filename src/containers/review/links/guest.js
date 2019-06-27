import AmosChat from 'components/amos-chat'
import Button from 'components/button'
import Title from 'components/title'
import Input from 'components/input'
import Monolog from '../monolog.sc'
import React from 'react'
import {navto} from 'common/history'

const Guest = () => (
  <Monolog>
    <AmosChat>
      Let's start with the links. Please enter the  URLs that lead to the resource 😇
    </AmosChat>
    <Title>Links</Title>
    <Input />
    <Button primary onClick={navto(`/review/topics`)}>
      Next
    </Button>
  </Monolog>
)

export default Guest
