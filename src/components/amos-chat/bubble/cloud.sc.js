import styled, {css} from 'styled-components'
import {AVATAR_SIZE_REGULAR, AVATAR_SIZE_LARGE} from '../constants'

const none = css`
  margin-top: 0;
`

const regular = css`
  /* 21.7 is half of height of first line of bubble */
  margin-top: ${AVATAR_SIZE_REGULAR / 2 - 21.7 + 'px'};
`

const large = css`
  margin-top: ${AVATAR_SIZE_LARGE / 2 - 21.7 + 'px'}
`

const ChatBox = styled.div`
  background-color: white;
  border-radius: 12px;
  border: 1.3px solid black;
  max-width: 440px;
  padding: 8px 12px;
  position: relative;
  box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.5);
  text-align: justify;
  word-break: break-word;
  hyphens: auto;
  ${props => eval(props.size)};
`

export default ChatBox
