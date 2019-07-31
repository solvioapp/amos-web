import AmosChat from 'components/amos-chat'
import AuthBox from 'components/auth-box'
import Button from 'components/button'
import Top_ from './top.sc'
import React from 'react'
import {navto} from 'common/history'

const Guest = ({...rest}) => (
  <Top_ columns={'two'} {...rest}>
    <Top_ columns={'left'}>
      <AmosChat avatar={'large'} callToAction={
        <Button primary onClick={navto(`/review/links`)}>
          Submit anonymously
        </Button>
      }>
        Here you can add reviews for online learning resources - either anonymously or
        by signing up. I would recommend signing up first because then you can get reputation
        for your reviews. 🙂
      </AmosChat>
    </Top_>
    <AuthBox/>
  </Top_>
)

export default Guest
