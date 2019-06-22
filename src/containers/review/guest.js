import React from 'react'
import {Link} from 'react-router-dom'
import {Col} from 'components/page-layout'
import createChatBoxes from 'common/createChatBoxes';
import {Review} from 'constants/chat'
import AuthBox from 'components/auth'
import Aux from 'components/aux'
import Button from 'components/btn'

const Guest = () => (
  <Aux>
    <Col>
      {createChatBoxes(Review.Guest)}
      <Link to="/review/links"><Button type='REVIEW/SUBMIT-ANONYMOUSLY'/></Link>
    </Col>
    <Col>
      <AuthBox />
    </Col>
  </Aux>
)

export default Guest
