import styled from 'styled-components'
import {NavLink} from 'react-router-dom'

const Link = styled(NavLink)`
  color: black;
  font-size: 20px;
  font-weight: 500;
  text-decoration: none;
  text-transform: uppercase;
  padding: 0px 10px;

  &.active {
    border-bottom: 2px solid white;
    color: #0066ff
  }
  & + & {
    margin-left: 16px;
  }
  @media (max-width: 768px) {
    display: none;
  }
`

export default Link
