import React from 'react'
import {Link} from 'react-router-dom'
import {Auth} from 'constants/chat'
import createChatBoxes from 'common/createChatBoxes'
import Aux from 'components/auxiliary'
import {Col} from 'components/page-layout'
import Heading from 'components/heading'
import Input from 'components/input'
import Button from 'components/btn'

const Success = () => (
  <Aux>
    <Col>
      {createChatBoxes(Auth.Success)}
      <Button type='REVIEW/SUBMIT-A-REVIEW' />
    </Col>
  </Aux>
)

export default Success
