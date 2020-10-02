import React from 'react'
import PropTypes from 'prop-types'

import Header from './header'
import Footer from './footer'
import CustomHead from '../custom-head'
import './styles.scss'

const Layout = ({ children, title, description }) => {
  return (
    <div className="layout-component__main-component">
      <CustomHead title={title} description={description} />
      <Header />
      <div className="layout-component__children-container">{children}</div>
      <Footer />
    </div>
  )
}

Layout.defaultProps = {
  title: '',
  description: '',
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  title: PropTypes.string,
  description: PropTypes.string,
}

export { Layout }
export default Layout
