import Aux from 'components/auxiliary'
import Button from 'components/button'
import Heading from 'components/heading'
import Input from 'components/input'
import React from 'react'
import createChatBoxes from 'common/createChatBoxes'
import {Col} from 'components/page-layout'
import {Review} from 'constants/chat'
import {navto} from 'common/history'

const Guest = () => (
  <Aux>
    <Col>
      {createChatBoxes(Review.Links)}
      <Heading>Links</Heading>
      <Input />
      <Button icon="user" onClick={navto(`/review/topics`)}>
        Next
      </Button>
    </Col>
  </Aux>
)

export default Guest
