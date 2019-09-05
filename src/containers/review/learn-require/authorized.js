import AmosChat from 'components/amos-chat'
import Title from 'components/title'
import Button from 'components/button'
import Buttons from '../buttons.sc'
import Top_ from '../top.sc'
import InputForm_ from '../input-form.sc'
import React from 'react'
import {useReqState} from './'

import ReqList from './ReqList'

const Authorized = ({...rest}) => {
  const {initItems, goFinish, goPrev, setRequirements} = useReqState()

  return <Top_ {...rest}>
    <AmosChat>
      What do you need to know in order to make the most out of this resource?
      Again, try to be as detailed as possible.
    </AmosChat>
    <InputForm_>
      <Title>Learning requirements</Title>
      <ReqList onUpdate={setRequirements} initItems={initItems}/>
      <Buttons>
        <Button onClick={goPrev}>
          Previous
        </Button>
        <Button primary onClick={goFinish}>
          Finish
        </Button>
      </Buttons>
    </InputForm_>
  </Top_>
}

export default Authorized
