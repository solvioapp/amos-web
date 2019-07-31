import styled from 'styled-components'
import {prop} from 'common/style'
import React from 'react'

const Checkbox_ = styled.span `

  display: flex;
  align-items: center;
  padding: .5rem;

  input {
    position: relative;
    flex-shrink: 0;
    width: 20px;
    height: 20px;
    appearance: none;
    -webkit-appearance: none;
    -moz-appearance: none;
    outline: none; // TODO: manage :focus
    background: white;
    cursor: pointer;
    width: ${props => (2 * props.checkboxSize) - (2 * props.checkboxBorderSize) + 'px'};
    height: ${props => props.checkboxSize + 'px'};
    border: ${props => props.checkboxBorderSize}px solid #959595;
    border-radius: ${props => props.checkboxSize - (2* props.checkboxBorderSize)}px;

    &::before {
      content: ' ';
      position: absolute;
      top: 50%;
      right: 50%;
      bottom: 50%;
      left: 50%;
      transition: all .1s;
      background: #0066FF;
      top: ${props => props.checkboxBorderSize}px;
      right: ${props => props.checkboxSize - props.checkboxBorderSize}px;
      bottom: ${props => props.checkboxBorderSize}px;
      left: ${props => props.checkboxBorderSize}px;
      border-radius: 50%;
      background: #959595;
    }

    &:checked {
      border-color: #0066FF;

      &::before {
        right: ${props => props.checkboxBorderSize}px;
        left: ${props => props.checkboxSize - props.checkboxBorderSize}px;
        background: #0066FF;
      }
    }
  }
`

export default Checkbox_
