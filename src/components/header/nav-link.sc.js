import styled from 'styled-components'
import {NavLink} from 'react-router-dom'

const Link = styled(NavLink)`
  color: white;
  font-size: 20px;
  font-weight: 600;
  text-decoration: none;
  text-transform: uppercase;

  &.active {
    border-bottom: 2px solid white;
  }
  & + & {
    margin-left: 16px;
  }
`

export default Link
