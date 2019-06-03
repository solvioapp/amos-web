import Content from './content.sc'
import Footer from 'components/footer'
import Header from 'components/header'
import NotFound from 'containers/not-found'
import PageLayout from './page-layout.sc'
import Proposals from 'containers/proposals'
import React from 'react'
import Review from 'containers/review'
import Search from 'containers/search'
import {Redirect, Route, Switch} from 'react-router-dom'

const App = () => (
  <PageLayout>
    <Header/>
    <Content>
      <Switch>
        <Route path="/search" exact component={Search}/>
        <Route path="/review" exact component={Review}/>
        <Route path="/proposals" exact component={Proposals}/>
        <Route path="/notifications" exact component={NotFound}/>
        <Route path="/profile" exact component={NotFound}/>
        <Route path="/settings" exact component={NotFound}/>
        <Redirect from="/" to="search"/>
      </Switch>
    </Content>
    <Footer/>
  </PageLayout>
)

export default App
