import AmosChat from 'components/amos-chat/top.sc'
import Input from 'components/input/top.sc'
import Button from 'components/button/top.sc'
import AuthOptions from 'components/auth-options/top.sc'
import Panel from 'components/panel/top.sc'
// import {FirstInput} from './'
import styled, {css} from 'styled-components'

const first = (el, arg2, arg3) => {
  return css`
    > ${el} + ${el} {
      ${arg2}: ${arg3};
    }

    > ${el} + ${el} ~ ${el} {
      ${arg2}: initial;
    }
  `
}

const test = props => {
  console.log('props', props)
  return css`
  ${props.forwardedComponent.componentStyle.lastClassName} {
    margin: 500px;
  }
  `
}

const Top_ = styled(Panel)`
  > ${AmosChat}:first-of-type {
    margin-top: 40px;
  }

  /* 
    > ${AmosChat} + ${Input} {
      margin-top: 24px;
  } */

  /* > ${Input}:nth-of-type(2) {
    margin-top: 24px;
  } */

  /* ${first(Input, 'margin-top', '24px')} */

  #first {
    margin-top: 24px;
  }

  /* > ${Input} {
    margin-top: 400px;
  } */

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

  /* ${test} */
`
  // ${props => {
  //   console.log('props.forwardedComponent.styledComponentId', props.forwardedComponent.styledComponentId)
  //   return props.forwardedComponent.styledComponentId
  // }} {
  //   margin: 400px;
  // }
  /* ${test} */

  /* ${props => eval(props)} */

export default Top_
