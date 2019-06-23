import styled, {css} from 'styled-components'
import {ifProp, prop} from 'common/style'

const primary = css`
  background-color: #6558f5;
  border: 1px solid #6558f5;
  color: white;

  &:hover {
    background-color: #7b70f9;
  }
`

const iconOnly = css`
  font-size: 0;
  padding: 0;
  width: 40px;

  > svg {
    height: 17px;
  }
`

const Button = styled.button`
  background-color: white;
  border-radius: 3px;
  border: 1px solid #959595;
  color: black;
  cursor: pointer;
  font-size: 15px;
  height: ${prop(`height`, `40px`)};
  padding: 0 30px;
  user-select: none;
  width: ${prop(`width`)};

  > svg {
    height: 15px;
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
    background-color: #fafafc;
  }
  &:focus {
    outline: none;
  }

  ${ifProp(`primary`, primary)}
  ${ifProp(`iconOnly`, iconOnly)}
`

export default Button
