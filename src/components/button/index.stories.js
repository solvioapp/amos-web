import Button from './index'
import React from 'react'
import styled from 'styled-components'
import {storiesOf} from '@storybook/react'

const Panel = styled.div`
  background-color: white;
  height: 100vh;
  padding: 10px;

  > button + button {
    margin-left: 16px;
  }
`

storiesOf(`Button`, module)
  .add(`Text`, () =>
    <Panel>
      <Button>
        Default
      </Button>
      <Button primary>
        Primary
      </Button>
    </Panel>
  )
  .add(`Icon & Text`, () =>
    <Panel>
      <Button icon="user">
        Default
      </Button>
      <Button primary icon="settings">
        Primary
      </Button>
    </Panel>
  )
  .add(`Icon`, () =>
    <Panel>
      <Button icon="user"/>
      <Button primary icon="settings"/>
    </Panel>
  )
