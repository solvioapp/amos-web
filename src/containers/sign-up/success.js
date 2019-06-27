import AmosChat from 'components/amos-chat'
import Button from 'components/button'
import Monolog from './monolog.sc'
import Panel from './panel.sc'
import React from 'react'
import {Auth} from 'constants/chat'
import {navto} from 'common/history'

const Success = () => (
  <Panel>
    <Monolog>
      <AmosChat messages={Auth.Success}/>
      <Button primary onClick={navto(`/review`)}>
        Submit review
      </Button>
    </Monolog>
  </Panel>
)

export default Success
