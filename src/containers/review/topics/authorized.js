import AmosChat from 'components/amos-chat'
import Button from 'components/button'
import Title from 'components/title'
import Buttons from '../buttons.sc'
import Top_ from '../top.sc'
import InputForm_ from '../input-form.sc'

import Topics from './TopicList'
import React from 'react'

import {useReqState} from './'

const messages = [
  `What topics is the resource on? Try to be as specific as possible to get the most Rep.`,
  `Btw, your submissions will be private for now. 🕵🏼‍`
]

const Authorized = ({...rest}) => {
  const {goPrev, goNext, goFinish, setTopics, initItems} = useReqState()

  return <Top_ {...rest}>
    <AmosChat>
      {messages}
    </AmosChat>
    <InputForm_>
      <Title>Topics</Title>
      <Topics onUpdate={setTopics} initItems={initItems}/>
      <Buttons>
        <Button onClick={goPrev}>
          Previous
        </Button>
        <Button primary onClick={goNext}>
          Next
        </Button>
        <Button onClick={goFinish}>
          Finish
        </Button>
      </Buttons>
    </InputForm_>
  </Top_>
}

export default Authorized
