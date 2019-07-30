import Button from 'components/button/top.sc'
import Panel from 'components/panel/top.sc'
import styled, {css} from 'styled-components'

const two = css``

const left = css`
  > ${Button} {
    margin-top: 30px
  }
`

const Top_ = styled(Panel)`
  ${({columns}) => eval(columns)}
`

export default Top_
