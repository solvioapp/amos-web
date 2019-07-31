import Top_ from './top.sc'
import Link from './link.sc'
import React from 'react'

const Footer = ({...rest}) => (
  <Top_  {...rest}>
    Built with ❤️ and ☕️ by
    {` `}
    <Link target="_blank" href="http://solvio.org">
      Solvio Foundation
    </Link>.
    {` `}
    <Link target="_blank" href="https://github.com/solviofoundation/amos/wiki">
      Help.
    </Link>
  </Top_>
)

export default Footer
