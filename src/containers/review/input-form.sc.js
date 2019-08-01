import Button from 'components/button/top.sc'
import styled from 'styled-components'

const InputForm_ = styled.div`
  display: flex;
  flex-direction: column;
  align-content: flex-start;

  > ${Button} {
    align-self: center;
    margin-top: 30px;
  }
`

export default InputForm_