import styled from 'styled-components'

const Monolog = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;

  > div + input,
  > div + button,
  > input + button {
    margin-top: 30px;
  }

  @media (max-width: 768px) {
    align-items: stretch;
  }
`

export default Monolog
