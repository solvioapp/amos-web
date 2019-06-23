import React from 'react'
import {Link} from 'react-router-dom'
import {Review} from 'constants/chat'
import createChatBoxes from 'common/createChatBoxes'
import Aux from 'components/auxiliary'
import {Col} from 'components/page-layout'
import Heading from 'components/heading'
import Input from 'components/input'
import Button from 'components/btn'

const Authorized = () => (
  <Aux>
    <Col>
      {createChatBoxes(Review.ThanksAuthorized)}
      <button>Share</button>
    </Col>
  </Aux>
)

export default Authorized
