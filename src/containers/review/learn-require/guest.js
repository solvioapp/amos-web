import AmosChat from 'components/amos-chat'
import Button from 'components/button'
import Buttons from '../buttons.sc'
import Title from 'components/title'
import Input from 'components/input'
import Monolog from '../monolog.sc'
import React from 'react'
import {navto} from 'common/history'

const Guest = () => (
  <Monolog>
    <Title>Learning requirements</Title>
    <AmosChat>
      What do you need to know in order to make the most out of this resource?
      Again, try to be as detailed as possible.
    </AmosChat>
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
