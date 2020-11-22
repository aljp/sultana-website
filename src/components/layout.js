/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React, { useEffect, useState } from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import Nav from "./nav";
import 'styling/layout.scss';
import SultanaFooter from "components/footer";
import { GlobalContextProvider } from 'components/GlobalContext';

const Layout = ({ children, className }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  const [pageWidth, setPageWidth] = useState(typeof window !== 'undefined' && window.innerWidth);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.onresize = () => { setPageWidth(window.innerWidth) };
    }
  }, [])

  return (
    <GlobalContextProvider value={{ pageWidth }}>
      <div className={`page-container ${className || ''}`}>
        <Nav siteTitle={data.site.siteMetadata.title} />
        <main>{children}</main>
        <SultanaFooter />
      </div>
    </GlobalContextProvider>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
