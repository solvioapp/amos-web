import styled from 'styled-components'

const Footer = styled.footer`
  color: black;
  font-size: 1rem;
  padding: 16px;
  text-align: center;
  position: fixed;
  bottom: 0;
  width: 100%;

  > a {
    color: black;
    text-decoration: none;
  }
  @media (max-width: 768px) {
    display: none;
  }
`

export default Footer
