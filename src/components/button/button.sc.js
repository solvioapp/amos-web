import styled, {css} from 'styled-components'
import {ifProp, prop} from 'common/style'

const primary = css`
  background-color: #0066FF;
  border: 1px solid #0066FF;
  color: white;
  white-space: nowrap;

  &:hover {
    background-color: #2F82FF;
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
  border-radius: 8px;
  border: 1.3px solid #959595;
  color: black;
  cursor: pointer;
  font-size: 15px;
  height: ${prop(`height`, `40px`)};
  padding: 0 20px;
  user-select: none;
  width: ${prop(`width`, `250px`)};
  /* width: 100%; */

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
