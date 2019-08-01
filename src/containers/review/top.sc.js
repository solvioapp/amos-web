import Button from 'components/button/top.sc'
import Panel from 'components/panel/top.sc'
import InputForm_ from './input-form.sc'
import styled, {css} from 'styled-components'

const two = css``

const left = css`
  /* > ${Button} {
    margin-top: 30px
  } */
`

const Top_ = styled(Panel)`
  /* ${({columns}) => eval(columns)} */
  > ${InputForm_} {
    margin-top: 30px;
  }
`

export default Top_
