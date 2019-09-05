import AmosChat from 'components/amos-chat'
import Title from 'components/title'
import Button from 'components/button'
import Input from 'components/input'
import Buttons from '../buttons.sc'
import Top_ from '../top.sc'
import InputForm_ from '../input-form.sc'
import {navto} from 'common/history'
import React from 'react'

import ReqList from './ReqList'

const Authorized = ({...rest}) => (
  <Top_ {...rest}>
    <AmosChat>
      What do you need to know in order to make the most out of this resource?
      Again, try to be as detailed as possible.
    </AmosChat>
    <InputForm_>
      <Title>Learning requirements</Title>
      <ReqList/>
      <Buttons>
        <Button onClick={navto(`/review/topics`)}>
          Previous
        </Button>
        <Button primary onClick={navto(`/review/thanks`)}>
          Finish
        </Button>
      </Buttons>
    </InputForm_>
  </Top_>
)

export default Authorized
