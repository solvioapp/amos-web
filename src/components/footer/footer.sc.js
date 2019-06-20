import styled from 'styled-components'

const Footer = styled.footer`
  bottom: 0;
  color: black;
  font-size: 1rem;
  padding: 16px;
  position: fixed;
  text-align: center;
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
