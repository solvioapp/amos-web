import Col from 'components/page-layout/column.sc'
import Content from './content.sc'
import Footer from 'components/footer'
import Layout from './layout.sc'
import NavMenu from 'components/nav-menu'
import React from 'react'
import Row from 'components/page-layout/row.sc'

const PageLayout = ({children}) => (
  <Layout>
    <NavMenu/>
    <Content>{children}</Content>
    <Footer/>
  </Layout>
)

export default PageLayout

export {
  Col,
  Row
}
