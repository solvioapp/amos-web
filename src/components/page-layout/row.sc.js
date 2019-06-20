import styled from 'styled-components'

const Row = styled.div`
  &::after{
    clear: both;
    content: "";
    display: block;
  }
`

export default Row
