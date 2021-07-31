import React from "react"
import PropTypes from "prop-types"

import "./layout.module.scss"
import Header from '../Header/header';

const Layout = ({ children }) => {
  return (
    <>
      <main>
        <Header/>
        {children}
      </main>
    </>
  )
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout
