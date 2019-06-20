import styled from 'styled-components'

const BottomNavigationDiv = styled.div`
  position: fixed;
  bottom: 0;
  width: 100%;
  text-align: center;
  padding: 10px 2px;
  border-top: 1px solid #d3d3d3;
  @media (min-width: 768px) {
    display: none;
  }
`

export default BottomNavigationDiv
