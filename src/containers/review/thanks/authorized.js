import AmosChat from 'components/amos-chat'
import React from 'react'
import {Review} from 'constants/chat'

const Authorized = () => (
  <AmosChat messages={Review.ThanksAuthorized}/>
)

export default Authorized
