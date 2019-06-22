import React from 'react'
import {Link} from 'react-router-dom'
import {Review} from 'constants/chat'
import createChatBoxes from 'common/createChatBoxes'
import Aux from 'components/aux'
import {Col} from 'components/page-layout'
import Heading from 'components/heading'
import Input from 'components/input'
import Button from 'components/btn'

const Guest = () => (
  <Aux>
    <Col>
      <Heading>Learning requirements</Heading>
      {createChatBoxes(Review.Requirements)}
      <Input />
      <Link to="/review/topics"><Button type='REVIEW/PREVIOUS' /></Link>
      <Button type='REVIEW/FINISH' />
    </Col>
  </Aux>
)

export default Guest
