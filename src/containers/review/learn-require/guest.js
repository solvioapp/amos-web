import Title from 'components/title'
import AmosChat from 'components/amos-chat'
import Button from 'components/button'
import Buttons_ from '../buttons.sc'
import Top_ from '../top.sc'
import InputForm_ from '../input-form.sc'
import React from 'react'
import {useReqState} from './'

import ReqList from './ReqList'

const Guest = ({...rest}) => {
  const {initItems, goFinish, goPrev, setRequirements} = useReqState()

  return (
    <Top_ {...rest}>
      <AmosChat>
      What do you need to know in order to make the most out of this resource?
      Again, try to be as detailed as possible.
      </AmosChat>
      <InputForm_>
        <Title>Learning requirements</Title>
        <ReqList onUpdate={setRequirements} initItems={initItems}/>
        <Buttons_>
          <Button onClick={goPrev}>
          Previous
          </Button>
          <Button primary onClick={goFinish}>
          Finish
          </Button>
        </Buttons_>
      </InputForm_>
    </Top_>
  )
}

export default Guest
