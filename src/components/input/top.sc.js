import Label_ from './label.sc'
import styled from 'styled-components'
import {prop} from 'common/style'


const Top = styled.div`
  display: flex;
  align-items: flex-start;
  flex-direction: column;

  ${Label_} {
    margin: 0 0 7.5px 11px;
  }
`

export default Top
