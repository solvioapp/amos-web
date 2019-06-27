import AmosChat from 'components/amos-chat'
import AuthBox from 'components/auth-box'
import Monolog from './monolog.sc'
import Panel from './panel.sc'
import React from 'react'
import {Search} from 'constants/chat'

const Guest = () => (
  <Panel>
    <Monolog>
      <AmosChat messages={Search.Guest}/>
    </Monolog>
    <AuthBox/>
  </Panel>
)

export default Guest
