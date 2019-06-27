import Authorized from './authorized'
import Guest from './guest'
import React from 'react'
import connect from '../connect'

const Thanks = ({isAuthenticated}) => (
  isAuthenticated ? <Authorized/> : <Guest/>
)

export default connect(Thanks)
