import ChatFlow_ from './chat-flow.sc'
import styled from 'styled-components'

const Top_ = styled.div`
  align-items: flex-start;
  display: flex;
  max-width: fit-content;

  > ${ChatFlow_} {
    margin-left: 50px;
  }
`

export default Top_
