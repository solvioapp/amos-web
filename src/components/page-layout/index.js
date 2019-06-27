import Content from './content.sc'
import Footer from 'components/footer'
import Layout from './layout.sc'
import NavMenu from 'components/nav-menu'
import React from 'react'

const PageLayout = ({isAuthenticated, children}) => (
  <Layout>
    <NavMenu isAuthenticated={isAuthenticated}/>
    <Content>{children}</Content>
    <Footer/>
  </Layout>
)

export default PageLayout
