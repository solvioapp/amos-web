import styled, {css} from 'styled-components'
import {ifProp, prop} from 'common/style'

const regular = css`
  height: 75px;
  width: 75px;
`

const large = css`
  height: 125px;
  width: 125px;
`

const Avatar = styled.img`
  /* background-color: #f3f3f3;
  border-radius: 50%;
  border: 1px black solid; */
  display: inline;
  ${props => eval(props.size)}
`

export default Avatar
