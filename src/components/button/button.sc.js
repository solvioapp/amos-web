import styled from 'styled-components'
import {prop} from 'common/style'

const Button = styled.button`
  background-color: #6558f5;
  border-radius: 3px;
  border: 0;
  color: white;
  cursor: pointer;
  font-size: 16px;
  height: ${prop(`height`, `40px`)};
  padding: 0 30px;
  user-select: none;
  width: ${prop(`width`)};

  > svg {
    fill: white;
    height: 16px;
  }
  > span {
    vertical-align: middle;
  }
  > svg + span {
    margin-left: 8px;
  }

  &:active {
    transform: scale(0.98);
  }
  &:hover {
    background-color: #7b70f9;
  }
  &:focus {
    outline: none;
  }
`

export default Button
