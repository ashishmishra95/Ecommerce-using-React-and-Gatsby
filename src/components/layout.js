/**
 * Layout component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { StaticQuery, graphql } from "gatsby"
// The Footer component got injected in this Layout so it can be used
import Footer from './Reusable/Footer' 
import Navbar from './Reusable/Navbar'
import "./bootstrap.min.css"
import "./layout.css"

// Making child component for the application under layout
const Layout = ({children}) => (
  <div>
    <Navbar/>
    {children}
    <Footer/>
  </div>
  
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout