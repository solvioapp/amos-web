import React from 'react'
import connect from './connect'
import styled from 'styled-components'
import {Row, Col} from 'components/page-layout'
import {css} from 'styled-components'
import {ifProp} from 'common/style'

const Panel = styled.div`
  margin-top: 15%;
  @media (max-width: 768px) {
    margin-top: 0px;
  }
`

const primary = css`
  background-color: blue;
`

const Div = styled.div`
  background-color: yellow;
  ${ifProp(`primary`, primary, ``)}
`

function Review({slogan}) {
  return (
    <Panel>
      <Row>
        <Col xs="12" sm="7" md="6" lg="4"><Div>{slogan}</Div></Col>
        <Col xs="12" sm="5" md="4" lg="6"><Div primary>{slogan}</Div></Col>
      </Row>
    </Panel>
  )
}

export default connect(Review)
