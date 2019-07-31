import AmosChat from 'components/amos-chat'
import Button from 'components/button'
import Input from 'components/input'
import Top_ from '../top.sc'
import React from 'react'
import Title from 'components/title'
import {navto} from 'common/history'

const Guest = ({...rest}) => (
  <Top_ columns={'left'}  {...rest}>
    <AmosChat>
      Let's start with the links. Please enter the  URLs that lead to the resource 😇
    </AmosChat>
    <Title>Links</Title>
    <Input />
    <Button primary onClick={navto(`/review/topics`)}>
      Next
    </Button>
  </Top_>
)

export default Guest
