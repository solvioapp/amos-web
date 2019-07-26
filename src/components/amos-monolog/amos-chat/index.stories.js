import AmosChat from './index'
import React from 'react'
import {storiesOf} from '@storybook/react'

const messages = [
  `Hello I'm Amos!`,
  `Let's start with the links.
   Please enter the URLs that lead to the resource 😇`,
]

storiesOf(`AmosChat`, module)
  .add(`Single box`, () =>
    <AmosChat>
      {messages}
    </AmosChat>
  )
