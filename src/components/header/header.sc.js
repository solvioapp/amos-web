import styled from 'styled-components'

const Header = styled.header`
  display: flex;
  justify-content: space-between;
  padding: 20px;
  border-bottom: 1px solid #d3d3d3;
  @media (max-width: 768px) {
    border-bottom: none;
    display: none;
  }
`

export default Header
