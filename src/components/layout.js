import React, { useRef } from "react"
import PropTypes from "prop-types"
import ReactToPrint from 'react-to-print'

import "./layout.css"
import useWindowSize from "../hooks/useWindowSize"

const Layout = ({ children }) => {
  const componentRef = useRef(null);
  const { width } = useWindowSize();

  // if (width < 809) {
  if (width < 0) {
    return (
      <div>
        <div style={{ margin: 20, border: '1.5px solid #333', padding: 20, textAlign: 'center' }}>
          <h3>I AM SORRY</h3>
          <p>Currently, this page is not supported screen width less than 809px. Try again later or use another device.</p>
        </div>
        <footer style={{
          textAlign: 'center',
          fontSize: 13,
        }}>
          <span style={{ marginRight: 20 }}><a href="https://github.com/bkdev98/resume">Edit on Github</a></span>
          <span style={{ marginRight: 20 }}>Made with <a href="https://www.gatsbyjs.org">Gatsby</a></span>
        </footer>
      </div>
    )
  }

  return (
    <>
      <div style={{
        maxWidth: 1024,
        margin: '0px auto',
        padding: 20,
      }}>
        <main
          ref={componentRef}
          className="print-area"
          style={width >= 809 ? {
            padding: '40px 60px',
          } : {
            padding: '20px 20px',
          }}
        >
          {children}
        </main>
        <footer style={{
          textAlign: 'center',
          marginTop: 10,
          fontSize: 13,
        }}>
          <span style={{ marginRight: 20 }}><a href="https://github.com/bkdev98/resume">Edit on Github</a></span>
          {width >= 809 && <span style={{ marginRight: 20 }}>
            <ReactToPrint
              trigger={() => <a href="#">Print this out</a>} // eslint-disable-line
              content={() => componentRef.current}
            />
          </span>}
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
