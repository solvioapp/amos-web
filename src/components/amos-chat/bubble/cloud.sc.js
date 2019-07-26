import styled, {css} from 'styled-components'
import {AVATAR_SIZE_REGULAR, AVATAR_SIZE_LARGE} from '../constants'

const regular = css`
  /* 21.7 is half of height of first line of bubble */
  margin-top: ${AVATAR_SIZE_REGULAR / 2 - 21.7 + 'px'};
`

const large = css`
  margin-top: ${AVATAR_SIZE_LARGE / 2 - 21.7 + 'px'}
`

const ChatBox = styled.div`
  background-color: white;
  border-radius: 10px;
  border: 1px solid black;
  max-width: 550px;
  padding: 8px 12px;
  position: relative;
  ${props => eval(props.size)};
`

export default ChatBox
