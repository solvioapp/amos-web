import styled from 'styled-components'

const Monolog = styled.div `
  align-items: flex-start;
  display: flex;
  flex-direction: column;

  > div + input,
  > div + button,
  > input + button {
    margin-top: 30px;
  }
  > div + div {
    margin-top: 16px;
  }

  @media (max-width: 768px) {
    align-items: stretch;
  }
`

export default Monolog


// const ChatFlow = styled.div`
// `

// export default ChatFlow
