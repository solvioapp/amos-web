import styled from 'styled-components'

const Panel = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  > h1 + div,
  > div + input,
  > input + button,
  > input + input {
    margin-top: 24px;
  }

  > div + div {
    margin-top: 30px;
  }

  > button {
    margin-top: 30px;
  }

  > button + div {
    margin-top: 24px;
  }
`

export default Panel
