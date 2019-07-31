import Bubble from './bubble/top.sc'
import Button from 'components/button/top.sc'
import styled, {css} from 'styled-components'
import {AVATAR_SIZE_REGULAR, AVATAR_SIZE_LARGE} from './constants'

const none = css`
  margin-top: 0;
`

const regular = css`
  /* 21.7 is half of height of first line of bubble */
  margin-top: ${AVATAR_SIZE_REGULAR / 2 - 21.7+ (AVATAR_SIZE_LARGE - AVATAR_SIZE_REGULAR) / 2}px;
`

const large = css`
  margin-top: ${AVATAR_SIZE_LARGE / 2 - 21.7 }px
`

const ChatFlow_ = styled.div`
  ${props => eval(props.size)};

  align-items: flex-start;
  display: flex;
  flex-direction: column;

  > ${Button} {
    margin-top: 30px;
    align-self: center;
  }

  > ${Bubble} + ${Bubble} {
    margin-top: 16px;
  }

  @media (max-width: 768px) {
    align-items: stretch;
  }
`

export default ChatFlow_