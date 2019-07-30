import Bubble from './bubble/top.sc'
import styled from 'styled-components'

const ChatFlow_ = styled.div `
  align-items: flex-start;
  display: flex;
  flex-direction: column;

  > ${Bubble} + ${Bubble} {
    margin-top: 16px;
  }

  @media (max-width: 768px) {
    align-items: stretch;
  }
`

export default ChatFlow_