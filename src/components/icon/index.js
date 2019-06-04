import React from 'react'
import Svg from './svg.sc'
import iconsList from './svg'

function Icon({src, ...props}) {
  const svg = typeof src === `string` ? iconsList[src] : src
  if (!svg) {
    throw new Error(`No icon found: '${src}'`)
  }
  return (
    <Svg viewBox={svg.viewBox} {...props}>
      <use xlinkHref={svg.url}/>
    </Svg>
  )
}

export default Icon
