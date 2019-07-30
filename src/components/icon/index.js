import React from 'react'
import Top_ from './top.sc'
import iconsList from './svg'

function Icon({src, ...props}) {
  const svg = typeof src === `string` ? iconsList[src] : src
  if (!svg) {
    throw new Error(`No icon found: '${src}'`)
  }
  return (
    <Top_ viewBox={svg.viewBox} {...props}>
      <use xlinkHref={svg.url}/>
    </Top_>
  )
}

export default Icon
