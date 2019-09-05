import React from 'react'
import styled from 'styled-components'

export const RadioList = styled.div`
    display: flex;
    flex-direction: column;
    margin-left: 1rem;

    > * {
        display: flex;
        align-items: center;
        margin: 0.5rem;
    }

    input {
        appearance: none;

        border-radius: 50%;
        width: 1.5em;
        height: 1.5em;

        border: 2px solid #999;
        transition: 0.1s border linear;
        outline: none;
        margin-right: 0.5em;
    }

    input:checked {
        border: 6px solid #7f7f7f;
    }
`

export const RadioGroupHead = styled.div`
    font-size: 1.1em;
    margin: 0.5em;
`

const RadioGroup = ({title, name, elements = []}) => {
  return (
    <div>
      {title && <RadioGroupHead>{title}</RadioGroupHead>}
      <RadioList>
        {elements.map(el => (
          <label key={el.value}>
            <input type="radio" name={name} value={el.value} />
            {el.text}
          </label>
        ))}
      </RadioList>
    </div>
  )
}

export default RadioGroup