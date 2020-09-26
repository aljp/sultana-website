import React from "react"
import 'materialize-css/dist/css/materialize.css';
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import LandingHeader from "./home/LandingHeader"
import ImageTextPanel from "components/ImageTextPanel"
import ProductContent from "pages/home/ProductContent"
import 'styling/home.scss'
import ServiceCards from "pages/home/ServicesCards";
import SEOPanel from "pages/home/SEOPanel";

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <LandingHeader />
    <ServiceCards />
    <ProductContent />
    <SEOPanel />
  </Layout>
)

export default IndexPage
