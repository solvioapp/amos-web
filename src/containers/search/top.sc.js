import styled from 'styled-components'
import Panel from 'components/panel/top.sc'
import Button from 'components/button/top.sc'

const Top_ = styled(Panel)`
  > ${Button} {
    margin-top: 30px;
  }
`

export default Top_
