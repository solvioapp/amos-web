import AmosChat from 'components/amos-chat'
import Title from 'components/title'
import Button from 'components/button'
import Input from 'components/input'
import Buttons from '../buttons.sc'
import Top_ from '../top.sc'
import {navto} from 'common/history'
import React from 'react'

const Authorized = ({...rest}) => (
  <Top_ {...rest}>
    <Title>Learning requirements</Title>
    <AmosChat>
      What do you need to know in order to make the most out of this resource?
      Again, try to be as detailed as possible.
    </AmosChat>
    <Input/>
    <Buttons>
      <Button onClick={navto(`/review/topics`)}>
        Previous
      </Button>
      <Button primary onClick={navto(`/review/thanks`)}>
        Finish
      </Button>
    </Buttons>
  </Top_>
)

export default Authorized
