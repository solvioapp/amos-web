import NavMenu from 'components/nav-menu'
import Footer from 'components/footer'
import Content_ from './content.sc'
import Top_ from './top.sc'
import React from 'react'

const PageLayout = ({isAuthenticated, children, ...rest}) => (
  <Top_ {...rest}>
    <NavMenu isAuthenticated={isAuthenticated}/>
    <Content_>{children}</Content_>
    <Footer/>
  </Top_>
)

export default PageLayout
