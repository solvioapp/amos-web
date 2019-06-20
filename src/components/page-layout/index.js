// import Content from './content.sc'
import Footer from 'components/footer'
import Header from 'components/header'
import Layout from './layout.sc'
import React from 'react'
import BottomNavigationLinks from '../bottom-navigation'
import Container from '../container/container.sc'

const PageLayout = ({children}) => (
  <Layout>
    <Header/>
    <Container>{children}</Container>
    <Footer/>
    <BottomNavigationLinks />
  </Layout>
)

export default PageLayout
