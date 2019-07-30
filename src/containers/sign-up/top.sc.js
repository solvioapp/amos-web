import Panel from 'components/panel/top.sc'
import Input from 'components/input/top.sc'
import AmosChat from 'components/amos-chat/top.sc'
import Checkbox from 'components/checkbox/top.sc'
import Button from 'components/button/top.sc'
import AuthOptions from 'components/auth-options/top.sc'
import styled from 'styled-components'

const Top_ = styled(Panel)`
  > ${Input} + ${Input} {
    margin-top: 30px;
  }

  > ${Input} + ${AmosChat} {
    margin-top: 30px;
  }

  > ${Checkbox} {
    margin-top: 36px;
  }

  > ${Button} {
    margin-top: 30px;
  }

  > ${AuthOptions} {
    margin-top: 24px;
  }
`

export default Top_
