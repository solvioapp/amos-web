import styled from 'styled-components'

const Buttons = styled.div`
  display: flex;
  margin-top: 30px;

  > button + button {
    margin-left: 16px;
  }
`

export default Buttons
