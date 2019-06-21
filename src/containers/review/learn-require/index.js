import Authorized from './authorized'
import Guest from './guest'
import React from 'react'
import connect from '../connect'

const LearnRequire = ({isAuthenticated}) => (
  isAuthenticated ? <Authorized/> : <Guest/>
)

export default connect(LearnRequire)
