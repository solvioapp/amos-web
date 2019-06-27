import Button from 'components/button'
import Panel from './panel.sc'
import React from 'react'
import Title from 'components/title'
import connect from './connect'

const Notifications = ({logout}) => (
  <Panel>
    <Title>Notifications</Title>
    <Button onClick={logout}>
      Logout
    </Button>
  </Panel>
)

export default connect(Notifications)
