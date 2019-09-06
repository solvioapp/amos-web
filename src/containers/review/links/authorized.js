import AmosChat from 'components/amos-chat'
import Button from 'components/button'
import Title from 'components/title'
import Top_ from '../top.sc'
import InputForm_ from '../input-form.sc'

import {useReqState} from './'
import LinkURLS from './LinkURLs'
import React from 'react'

const messages = [
  `Help me link the world's knowledge! You can submit reviews for online learning resources.
   If other people agree with your review, you will gain Rep. 😎
  `,
  `Let's start with the links. Please enter the  URLs that lead to the resource 😇`
]

const Authorized = ({rest}) => {
  const {setLinks, initItems, goNext} = useReqState()

  return <Top_ {...rest}>
    <AmosChat>{messages}</AmosChat>
    <InputForm_>
      <Title>Links</Title>
      <LinkURLS onUpdate={setLinks} initItems={initItems}/>
      <Button primary onClick={goNext}>
        Next
      </Button>
    </InputForm_>
  </Top_>
}

export default Authorized
