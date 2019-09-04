import AmosChat from 'components/amos-chat'
import Button from 'components/button'
import Title from 'components/title'
import Buttons from '../buttons.sc'
import InputForm_ from '../input-form.sc'
import Top_ from '../top.sc'
import {navto} from 'common/history'
import Topics from './TopicList'
import React from 'react'

const Guest = ({...rest}) => (
  <Top_ {...rest}>
    <AmosChat>
      What topics is the resource on?
      Try to be as specific as possible to get the most Rep.
    </AmosChat>
    <InputForm_>
      <Title>Topics</Title>
      <Topics/>
      <Buttons>
        <Button onClick={navto(`/review/links`)}>
          Previous
        </Button>
        <Button primary onClick={navto(`/review/requirements`)}>
          Next
        </Button>
        <Button>
          Finish
        </Button>
      </Buttons>
    </InputForm_>
  </Top_>
)

export default Guest
