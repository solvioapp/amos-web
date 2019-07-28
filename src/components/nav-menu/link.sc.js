import styled from 'styled-components'
import {NavLink} from 'react-router-dom'
import {ifProp} from 'common/style'

const Link = styled(NavLink)`
  color: black;
  display: ${ifProp(`hidden`, `none`, `inline`)};
  font-size: 20px;
  font-weight: 500;
  padding: 0px 10px;
  text-decoration: none;
  text-transform: uppercase;

  &.active {
    color: #0066ff
  }
  & + & {
    margin-left: 16px;
  }

  &:hover {
    color: #2F82FF;
  }

  @media (max-width: 768px) {
    font-size: 14px;
  }
`

export default Link
