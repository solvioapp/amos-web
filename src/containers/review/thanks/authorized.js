import AmosChat from 'components/amos-chat'
import Button from 'components/button'
import Top_ from '../top.sc'
import {navto} from 'common/history'
import React, {useCallback} from 'react'

import {useReviewCtx} from '../'

const goLinks = navto(`/review/links`)

const messages = [
  () => <span>
    Thank you 🙂️ Smarter every day!<br/>I'll let you know if you get Rep for that review ✌️
  </span>,
]

const Authorized = ({...rest}) => {
  const {submitReview} = useReviewCtx()

  const submitAndGo = useCallback(() => {
    submitReview()
    goLinks()
  }, [submitReview])

  return (
    <Top_ {...rest}>
      <AmosChat callToAction={
        <Button primary onClick={submitAndGo}>
          Submit another Review
        </Button>
      }>
        {messages}
      </AmosChat>
    </Top_>
  )
}

export default Authorized
