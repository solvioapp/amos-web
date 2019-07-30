import styled from 'styled-components'
import Bubble from './bubble/top.sc'

const ChatFlow_ = styled.div `
  align-items: flex-start;
  display: flex;
  flex-direction: column;

  /* > div + input,
  > div + button,
  > input + button {
    margin-top: 30px;
  } */
  ${Bubble} + ${Bubble} {
    margin-top: 16px;
  }

  @media (max-width: 768px) {
    align-items: stretch;
  }
`

export default ChatFlow_