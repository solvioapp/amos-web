import AmosChat from 'components/amos-chat'
import React from 'react'
import {Search} from 'constants/chat'

const Authorized = () => (
  <AmosChat messages={Search.Authorized}/>
)

export default Authorized
