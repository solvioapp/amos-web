import styled from 'styled-components'

const PageLayout = styled.div`
  background: white;
  display: flex;
  flex-direction: column;
  height: 100vh;

  @media (max-width: 768px) {
    flex-direction: column-reverse;
  }
`

export default PageLayout
