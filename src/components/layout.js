import React, { useRef } from "react"
import PropTypes from "prop-types"
import ReactToPrint from 'react-to-print'
import styled from 'styled-components'

import "./layout.css"

const PrintArea = styled.main`
  padding: 40px 60px;
  @media (max-width: 808px) {
    padding: 20px;
  }
`

const PrintButton = styled.span`
  margin-right: 20px;
  display: inline;
  @media (max-width: 808px) {
    display: none;
  }
`

const Layout = ({ children }) => {
  const componentRef = useRef(null);

  return (
    <>
      <div style={{
        maxWidth: 1024,
        margin: '0px auto',
        padding: 20,
      }}>
        <PrintArea
          ref={componentRef}
          className="print-area"
        >
          {children}
        </PrintArea>
        {/* <footer style={{
          textAlign: 'center',
          marginTop: 10,
          fontSize: 13,
        }}>
          <span style={{ marginRight: 20 }}><a href="https://github.com/bkdev98/resume">Edit on Github</a></span>
          <PrintButton style={{ marginRight: 20 }}>
            <ReactToPrint
              trigger={() => <a href="#">Print this out</a>} // eslint-disable-line
              content={() => componentRef.current}
            />
          </PrintButton>
          <span style={{ marginRight: 20 }}>Made with <a href="https://www.gatsbyjs.org">Gatsby</a></span>
        </footer> */}
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
