import styled from 'styled-components'
import AuthOptions from 'components/auth-options/top.sc'

const Panel = styled.div `
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 550px;
  width: 100%;
  
  > h1 + div,
  > div + input,
  > input + button,
  > input + input,
  ${AuthOptions}
  {
    margin-top: 24px;
  }

  > div + div,
  > button
  {
    margin-top: 30px;
  }
`

export default Panel
