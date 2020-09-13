import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import LandingLayout from './home/LandingLayout'
import LandingHeader from "./home/LandingHeader"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <LandingLayout 
      landingHeader={(
        <LandingHeader />
      )}
    />
  </Layout>
)

export default IndexPage
