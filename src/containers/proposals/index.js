import React from 'react'
import connect from './connect'

function Proposals({slogan}) {
  return (
    <div>
      {slogan}
    </div>
  )
}

export default connect(Proposals)
