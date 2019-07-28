import styled from 'styled-components'

const Panel = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr;
  gap: 200px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`

export default Panel
