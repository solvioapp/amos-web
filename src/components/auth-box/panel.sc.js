import styled from 'styled-components'

const Panel = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  text-align: center;
  padding-top: 10px;

  > div {
    margin-top: 20px;
  }

  > button + button {
    margin-top: 20px;
  }
`

export default Panel
