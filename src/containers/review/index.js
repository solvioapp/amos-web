import React from 'react'
import connect from './connect'
import Grid from '@material-ui/core/Grid'
import styled from 'styled-components'
import { withStyles, makeStyles } from '@material-ui/core/styles'
import Button from '@material-ui/core/Button'
import LoginRegister from '../../components/login-register'

const ReviewDiv = styled.div`
  margin-top: 15%;
  @media (max-width: 768px) {
    margin-top: 0px;
  }
`
const Circle = styled.div`
  border: 1px solid grey;
  border-radius: 50px;
  width: 100px;
  height: 100px;
  margin-top: 1.9rem;
  @media (max-width: 960px) {
    margin: 0 auto;
    margin-bottom: 14px;
  }
`
const MessageBox = styled.div`
  border: 1px solid grey;
  border-radius: 90px;
  
`
const Message = styled.p`
  padding: 25px;
  margin: 0px;
  text-align: justify
`

const ButtonDiv = styled.div`
  text-align: center;
  margin-top: 16px
`

const CircleWrapper = styled.div `
  text-align: center
  width: 100%
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
function Review({ slogan }) {
  const classes = useStyles()
  return (
    <div>
      {/* {slogan} */}
      <ReviewDiv>
        <Grid container spacing={0}>
          <Grid item xs={12} md={8} lg={8}>
            <Grid container spacing={2}>
              <Grid item xs={12} md={3} lg={2}>
                <CircleWrapper>
                  <Circle />
                </CircleWrapper>
              </Grid>
              <Grid item xs={12} md={8} lg={7}>
                <MessageBox>
                  <Message>
                    Here you can add reviews for online learning resources - either anonymously or by signing up. I would recommended
                    signing up first because then you get reputation for your reviews. &#128516;
                </Message>
                </MessageBox>
                <ButtonDiv>
                  <ColorButton variant="contained" color="primary" className={classes.margin}>
                    Submit Anonymously
                </ColorButton>
                </ButtonDiv>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12} md={4} lg={4}>
            <LoginRegister />
          </Grid>
        </Grid>
      </ReviewDiv>
    </div>
  )
}

export default connect(Review)
