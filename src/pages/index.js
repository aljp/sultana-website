import React from "react"
import 'materialize-css/dist/css/materialize.css';
import 'styling/home.scss'
import Layout from "../components/layout"
import SEO from "../components/seo"
import LandingHeader from "./home/LandingHeader"
import WhatWeDoPanel from "pages/home/WhatWeDoPanel"
import ServiceCards from "pages/home/ServicesCards";
import WhoWeArePanel from "pages/home/WhoWeArePanel";

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <LandingHeader />
    <WhoWeArePanel />
    <WhatWeDoPanel />
    <ServiceCards />
  </Layout>
)

export default IndexPage
