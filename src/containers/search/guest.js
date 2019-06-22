import React from 'react'

import {Col} from 'components/page-layout'
import createChatBoxes from 'common/createChatBoxes'
import {Search} from 'constants/chat'
import Auth from 'components/auth'
import Aux from 'components/aux'

const Guest = () => (
  <Aux>
    <Col>
      {createChatBoxes(Search.Guest)}
    </Col>
    <Col>
      <Auth />
    </Col>
  </Aux>
)

export default Guest