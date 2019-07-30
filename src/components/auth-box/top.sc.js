import styled from 'styled-components'
import Button from 'components/button/top.sc'
import AuthOptions from 'components/auth-options/top.sc'

const Top_ = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  text-align: center;
  padding-top: 40px;

  ${Button} + ${Button} {
    margin-top: 20px;
  }

  ${AuthOptions} {
    margin-top: 20px;
  }
`

export default Top_
