import styled from 'styled-components'
import {ifProp, prop} from 'common/style'

const Input_ = styled.input`
  background-color: white;
  border-radius: 4px;
  border: 1px solid ${ifProp(`hasError`, `#ff7aa8`, `#dbdbdb`)};
  box-shadow: inset 0 1px 2px rgba(10,10,10,.1);
  box-sizing: border-box;
  color: #363636;
  font-size: 1em;
  height: 3em;
  padding: 4px 10px;
  width: ${prop(`width`, `350px`)};

  &:active,
  &:focus {
    border-color: #3273dc;
    box-shadow: 0 0 0 0.125em rgba(50,115,220,.25);
    outline: none;
  }
`

export default Input_
