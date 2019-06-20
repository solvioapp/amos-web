import React from 'react'
import connect from './connect'
import styled, {css} from 'styled-components'
// import LoginRegister from '../../components/login-register'
import Row from '../../components/row/row.sc'
import Col from '../../components/column/column.sc'
import {ifProp} from '../../common/style'

const ReviewDiv = styled.div`
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
    <div>
      {/* {slogan} */}
      <ReviewDiv>
        <Row>
          <Col xs="12" sm="7" md="6" lg="4"><Div>{slogan}</Div></Col>
          <Col xs="12" sm="5" md="4" lg="6"><Div primary>{slogan}</Div></Col>
        </Row>
      </ReviewDiv>
    </div>
  )
}

export default connect(Review)
