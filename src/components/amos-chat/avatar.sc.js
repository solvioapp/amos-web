import styled, {css} from 'styled-components'
import {ifProp, prop} from 'common/style'
import {AVATAR_SIZE_REGULAR, AVATAR_SIZE_LARGE} from './constants'

const none = css`
  height: 0;
  width: 0;
`

const regular = css`
  height: ${AVATAR_SIZE_REGULAR + 'px'};
  width: ${AVATAR_SIZE_REGULAR + 'px'};
`

const large = css`
  height: ${AVATAR_SIZE_LARGE + 'px'};
  width: ${AVATAR_SIZE_LARGE + 'px'};
`

const Avatar_ = styled.img`
  /* background-color: #f3f3f3;
  border-radius: 50%;
  border: 1px black solid; */
  display: inline;
  ${props => eval(props.size)};
`

export default Avatar_
