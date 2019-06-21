import React from 'react'
import {Link} from 'react-router-dom'
import connect from './connect'

const Email = ({login}) => (
  <div>
    <h1>Sign up with email</h1>
    <p>Fake form by pressing you will be logged.</p>
    <Link onClick={login} to="/sign-up/success">
      Sign up
    </Link>
  </div>
)

export default connect(Email)
