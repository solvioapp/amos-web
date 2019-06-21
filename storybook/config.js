import './preview.css'
import {addParameters, configure} from '@storybook/react'

addParameters({
  options: {
    showNav: true,
    showPanel: false,
  }
})

function loadStories() {
  const req = require.context(`../src`, true, /\.stories\.jsx?$/)
  req.keys().forEach(filename => req(filename))
}

configure(loadStories, module)
