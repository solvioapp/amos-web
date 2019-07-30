import Label_ from './label.sc'
import styled from 'styled-components'


const Top_ = styled.div`
  display: flex;
  align-items: flex-start;
  flex-direction: column;

  > ${Label_} {
    margin: 0 0 7.5px 11px;
  }
`

export default Top_
