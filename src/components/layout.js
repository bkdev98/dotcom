import React from "react"
import PropTypes from "prop-types"

import "./layout.css"

const Layout = ({ children }) => {
  return (
    <>
      <div style={{
        maxWidth: 1024,
        margin: '0px auto',
        padding: 20,
      }}>
        <main style={{
          padding: '40px 60px',
          border: '1.5px solid #333',
        }}>{children}</main>
        <footer style={{
          textAlign: 'center',
          marginTop: 10,
          fontSize: 13,
        }}>
          <span style={{ marginRight: 20 }}><a href="https://github.com/bkdev98/resume">Edit this page</a></span>
          <span style={{ marginRight: 20 }}><a href="#">Download PDF</a></span>
          <span style={{ marginRight: 20 }}>Made with <a href="https://www.gatsbyjs.org">Gatsby</a></span>
        </footer>
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
