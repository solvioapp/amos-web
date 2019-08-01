import AmosChat from 'components/amos-chat'
import Button from 'components/button'
import Input from 'components/input'
import Title from 'components/title'
import Top_ from '../top.sc'
import InputForm_ from '../input-form.sc';
import {navto} from 'common/history'
import React from 'react'

const Guest = ({...rest}) => (
  <Top_ {...rest}>
    <AmosChat>
      Let's start with the links. Please enter the  URLs that lead to the resource 😇
    </AmosChat>
    <InputForm_>
      <Title>Links</Title>
      <Input />
      <Button primary onClick={navto(`/review/topics`)}>
        Next
      </Button>
    </InputForm_>
  </Top_>
)

export default Guest
