import styled from 'styled-components'

const Row = styled.div`
  &::after{
    content: "";
    clear: both;
    display: block;
  }
`

export default Row
