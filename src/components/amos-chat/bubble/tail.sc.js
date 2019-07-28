import styled from 'styled-components'

const ChatBox = styled.div`
  height: 12px;
  left: -10px;
  overflow: hidden;
  position: absolute;
  top: 12px;
  width: 10px;

  &::after {
    background: #ffffff;
    border: 1.3px solid black;
    content: '';
    height: 100%;
    position: absolute;
    right: -6px;
    top: -9px;
    transform-origin: 0 100%;
    transform: rotate(47deg);
    width: 100%;
  }
`

export default ChatBox
