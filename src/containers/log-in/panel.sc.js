import styled from 'styled-components'

const Panel = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 550px;
  width: 100%;

  > div + input {
    margin-top: 40px;
  }

  > input + input {
    margin-top: 24px;
  }
  
  > button + div {
    margin-top: 24px;
  }
`

export default Panel
