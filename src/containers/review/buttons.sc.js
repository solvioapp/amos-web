import Button from 'components/button/top.sc'
import styled from 'styled-components'

const Buttons = styled.div`
  display: flex;
  margin-top: 30px;

  ${Button} + ${Button} {
    margin-left: 16px;
  }
`

export default Buttons
