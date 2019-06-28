import styled from 'styled-components'

const Panel = styled.div`
  display: flex;
  flex-direction: column;

  > h1 + button {
    margin-top: 24px;
  }
`

export default Panel
