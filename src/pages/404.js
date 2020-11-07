import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />
    <div className="container">
      <h3>The page that you've requested doesn't exist</h3>
      <p>
        <Link to="/">Click here to go back.</Link>
      </p>
    </div>
  </Layout>
)

export default NotFoundPage
