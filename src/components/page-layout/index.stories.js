import PageLayout from './index'
import React from 'react'
import {Router} from 'react-router-dom'
import {createBrowserHistory} from 'history'
import {storiesOf} from '@storybook/react'

const history = createBrowserHistory()

storiesOf(`Page Layout`, module)
  .add(`Default`, () => (
    <Router history={history}>
      <PageLayout>
        <div>
          👋 Hello world!
        </div>
      </PageLayout>
    </Router>
  ))
