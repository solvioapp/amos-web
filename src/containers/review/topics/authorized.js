import AmosChat from 'components/amos-chat'
import Button from 'components/button'
import Buttons from '../buttons.sc'
import Input from 'components/input'
import Monolog from '../monolog.sc'
import React from 'react'
import Title from 'components/title'
import {navto} from 'common/history'

const Authorized = () => (
  <Monolog>
    <Title>Topics</Title>
    <AmosChat>
      What topics is the resource on? Try to be as specific as possible to get the most Rep.
    </AmosChat>
    <Input />
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
  </Monolog>
)

export default Authorized
