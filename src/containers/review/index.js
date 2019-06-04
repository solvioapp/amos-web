import React from 'react'
import connect from './connect'

function Review({slogan}) {
  return (
    <div>
      {slogan}
    </div>
  )
}

export default connect(Review)
