import Icon from './index'
import React from 'react'
import {storiesOf} from '@storybook/react'

storiesOf(`Icons`, module)
  .add(`Bell`, () => (
    <Icon src="bell"/>
  ))
  .add(`Settings`, () => (
    <Icon src="settings"/>
  ))
  .add(`User`, () => (
    <Icon src="user"/>
  ))
