import Top_ from './top.sc'
import AmosChat from 'components/amos-chat'
import Button from 'components/button'
import {navto} from 'common/history'
import React from 'react'

const messages = [
  `Hi again.`,
  `Psst Psst 🤫 The guys from Solvio said they'll teach me search when we have 10,000 "data points". And if we can't get there they'll get rid of me! 😱 They call this "iteration".. 😳`,
  `So I'm in desperate need of your help! Go ahead and submit reviews for your favorite learning resources.`,
  // `Oh and introduce me to your friends. My address is www.amos.ms... Let's keep this product alive 😉`,
]

const Authorized = ({...rest}) => (
  <Top_ {...rest}>
    <AmosChat callToAction={
        <Button primary onClick={navto(`/review`)}>
          Submit a Review
        </Button>}>
      {messages}
    </AmosChat>
  </Top_>
)

export default Authorized
