import React from 'react'

import {Col} from 'components/page-layout'
import createChatBoxes from 'common/createChatBoxes'
import {Search} from 'constants/chat'
import Auth from 'components/auth'
import Aux from 'components/auxiliary'

const Authorized = () => (
  <Aux>
    <Col>
      {createChatBoxes(Search.Authorized)}
    </Col>
  </Aux>
)

export default Authorized