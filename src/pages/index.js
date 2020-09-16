import React from "react"
import 'materialize-css/dist/css/materialize.css';
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import LandingLayout from './home/LandingLayout'
import LandingHeader from "./home/LandingHeader"
import ImageTextPanel from "../components/ImageTextPanel"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <LandingLayout 
      landingHeader={(
        <LandingHeader />
      )}
      panel1={(
        <ImageTextPanel />
      )}
    />
  </Layout>
)

export default IndexPage
