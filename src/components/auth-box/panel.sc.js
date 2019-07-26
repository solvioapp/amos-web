import styled from 'styled-components'

const Panel = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  text-align: center;
  padding-top: 10px;

  > div + button {
    margin-top: 24px;
  }

  > button + button {
    margin-top: 10px;
  }
`

export default Panel
