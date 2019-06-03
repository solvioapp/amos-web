import Content from './content.sc'
import Footer from 'components/footer'
import Header from 'components/header'
import Layout from './layout.sc'
import React from 'react'

const PageLayout = ({children}) => (
  <Layout>
    <Header/>
    <Content>
      {children}
    </Content>
    <Footer/>
  </Layout>
)

export default PageLayout
