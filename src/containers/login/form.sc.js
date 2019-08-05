import AuthOptions from 'components/auth-options/top.sc'
import Button from 'components/button/top.sc'
import Input from 'components/input/top.sc'
import styled from 'styled-components'

const Form = styled.form`
  align-items: center;
  display: flex;
  flex-direction: column;
  max-width: 550px;
  width: 100%;

  @media (max-width: 768px) {
    align-items: stretch;
  }

  > ${Input} {
    margin-top: 24px;
  }

  > ${Button} {
    margin-top: 24px;
  }

  > ${AuthOptions} {
    margin-top: 20px;
  }
`

export default Form
