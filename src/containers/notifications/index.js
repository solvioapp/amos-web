import React from 'react'
import connect from './connect'

const Notifications = ({logout}) => (
  <div>
    <h1>Notifications</h1>
    <button onClick={logout}>
      Logout
    </button>
  </div>
)

export default connect(Notifications)
