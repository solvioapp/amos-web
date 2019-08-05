import Button from 'components/button/top.sc'
import styled from 'styled-components'

const Panel = styled.div`
  display: flex;
  flex-direction: column;

  ${Button} {
    margin-top: 24px;
  }
`

export default Panel
