import React from 'react'
import connect from './connect'

function Search({slogan}) {
  return (
    <div>
      {slogan}
    </div>
  )
}

export default connect(Search)
