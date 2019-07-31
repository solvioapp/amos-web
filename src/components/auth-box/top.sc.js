import Button from 'components/button/top.sc'
import AuthOptions from 'components/auth-options/top.sc'
import styled, {css} from 'styled-components'
import {AVATAR_SIZE_LARGE, AVATAR_SIZE_REGULAR} from 'components/amos-chat/constants';

const Top_ = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  text-align: center;
  margin-top: ${AVATAR_SIZE_REGULAR / 2 - 21.7+ (AVATAR_SIZE_LARGE - AVATAR_SIZE_REGULAR) / 2}px;

  > ${Button} + ${Button} {
    margin-top: 20px;
  }

  > ${AuthOptions} {
    margin-top: 20px;
  }
`

export default Top_
