import React from 'react'
import {Link} from 'react-router-dom'
import {Review} from 'constants/chat'
import createChatBoxes from 'common/createChatBoxes'
import Aux from 'components/auxiliary'
import {Col} from 'components/page-layout'
import Heading from 'components/heading'
import Input from 'components/input'
import Button from 'components/btn'
import Auth from 'components/auth'

const Guest = () => (
  <Aux>
    <Col>
      {createChatBoxes(Review.ThanksGuest)}
      <Link to="/"><Button type='REVIEW/SUBMIT-ANONYMOUSLY' /></Link>
    </Col>
    <Col>
      <Auth />
    </Col>
  </Aux>
)

export default Guest
