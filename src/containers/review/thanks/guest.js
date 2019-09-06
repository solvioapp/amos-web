import AmosChat from 'components/amos-chat'
import AuthBox from 'components/auth-box'
import Button from 'components/button'
import Top_ from '../top.sc'
import React, {useCallback} from 'react'
import {navto} from 'common/history'

import {useReviewCtx} from '../'

const goRoot = navto(`/`)

const messages = [
  `Thanks for the review!`,
  `This is the last chance to get Reputation for this fantastic review by signing up. 🤟`,
]

const Guest = ({...rest}) => {
  const {submitReview} = useReviewCtx()

  const submitAndGo = useCallback(() => {
    submitReview()
    goRoot()
  }, [submitReview])

  return <Top_ columns="two" {...rest}>
    <Top_ columns="left">
      <AmosChat callToAction={
        <Button primary onClick={submitAndGo}>
          Submit anonymously
        </Button>
      }>{messages}</AmosChat>
    </Top_>
    <AuthBox/>
  </Top_>
}

export default Guest
