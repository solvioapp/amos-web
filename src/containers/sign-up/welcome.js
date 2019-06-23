import React from 'react'
import {Link} from 'react-router-dom'
import {Auth} from 'constants/chat'
import createChatBoxes from 'common/createChatBoxes'
import Aux from 'components/auxiliary'
import {Col} from 'components/page-layout'
import Heading from 'components/heading'
import Input from 'components/input'
import Button from 'components/btn'
import AuthBox from 'components/auth'

const Guest = () => (
  <Aux>
    <Col>
      <Heading>Sign up</Heading>
      {createChatBoxes(Auth.SignUp)}
      <AuthBox />
    </Col>
  </Aux>
)

export default Guest
