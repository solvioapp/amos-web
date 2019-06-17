import React from 'react'
import styled from 'styled-components'
import { withStyles, makeStyles } from '@material-ui/core/styles'
import Button from '@material-ui/core/Button'

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
const ColorButton = withStyles(theme => ({
    root: {
        color: theme.palette.getContrastText('#0066ff'),
        backgroundColor: '#0066ff',
        '&:hover': {
            backgroundColor: '#0066ff',
        },
        textTransform: 'capitalize',
        justifyContent: 'center',
        fontSize: '16px'
    },
}))(Button)
const useStyles = makeStyles(theme => ({
    margin: {
        margin: theme.spacing(1),
    },
}))

export default function LoginRegister() {
    const classes = useStyles()
    return (
        <div>
            <ButtonDiv>
                <ColorButton variant="contained" color="primary" className={classes.margin}>
                    Continue via Facebook
                </ColorButton>
                <ColorButton variant="contained" color="primary" className={classes.margin}>
                    Continue via Google&nbsp;&nbsp;&nbsp;&nbsp;
                </ColorButton>
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