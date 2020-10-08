import React from "react"
import 'materialize-css/dist/css/materialize.css';
import 'styling/home.scss'
import Layout from "../components/layout"
import SEO from "../components/seo"
import LandingHeader from "./home/LandingHeader"
import ProductContent from "pages/home/ProductContent"
import ServiceCards from "pages/home/ServicesCards";
import SEOPanel from "pages/home/SEOPanel";

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <LandingHeader />
    <ServiceCards />
    <div style={{paddingTop: '10vw', paddingBottom: '10vw'}}>
      <ProductContent />
    </div>
    <div style={{paddingTop: '10vw', paddingBottom: '10vw'}}>
      <SEOPanel />
    </div>
  </Layout>
)

export default IndexPage
