import AmosChat from 'components/amos-chat/top.sc'
import Input from 'components/input/top.sc'
import Button from 'components/button/top.sc'
import AuthOptions from 'components/auth-options/top.sc'
import Panel from 'components/panel/top.sc'
import styled from 'styled-components'

const Top_ = styled(Panel)`
  > ${AmosChat}:first-of-type {
    margin-top: 40px;
  }

  /* 
    > ${AmosChat} + ${Input} {
      margin-top: 24px;
  } */

  > ${Input}:nth-of-type(2) {
    margin-top: 24px;
  }

  > ${Input} + ${Input} {
    margin-top: 24px;
  }

  > ${Input} + ${AmosChat} {
    margin-top: 24px;
  }

  > ${Button} {
    margin-top: 24px;
  }
  
  > ${AuthOptions} {
    margin-top: 20px;
  }
`

export default Top_
