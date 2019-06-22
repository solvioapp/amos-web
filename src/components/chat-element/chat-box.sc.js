import styled, {css} from 'styled-components'

const ChatBox = styled.p `
  line-height: 1.7;
  margin: 5px 5px;
  padding: 8px 8px;
  border-radius: 20px;
  border-style: solid;
  border-color: black;
  ${props =>
    props.big &&
    css`
      border-width: 2px;
      font-size: 20px;
    ` ||
    css`
      border-width: 1.5px;
      font-size: 16px;
    `};
`

export default ChatBox