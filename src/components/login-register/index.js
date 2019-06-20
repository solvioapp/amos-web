/*
  Use SignUp instead of Login or Register components should match what we have in out UI.
  Split styles into separate files.
  Use better semantic names for components:
   instead ButtonDiv -> Splitter | Spacer
*/

import React from 'react'
import styled from 'styled-components'

const LoginRegisterText = styled.p`
  font-size: 16px;
  text-align: center
  @media (max-width: 768px) {
    margin-bottom: 5rem
  }
`
const LinkText = styled.span`
  cursor: pointer
`
const ButtonDiv = styled.div`
  text-align: center;
  margin-top: 16px
`

export default function LoginRegister() {
  return (
    <div>
      <ButtonDiv>
      </ButtonDiv>
      <ButtonDiv>OR</ButtonDiv>
      <LoginRegisterText>
        <LinkText>Sign up with email</LinkText>
        &nbsp;<span>&#9679;</span>&nbsp;
        <LinkText>Log in with email</LinkText>
      </LoginRegisterText>
    </div>
  )
}
