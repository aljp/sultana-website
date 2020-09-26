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
import CardPanel from "pages/home/CardPanel";
import SEOPanel from "pages/home/SEOPanel";

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <LandingHeader />
    <CardPanel />
    <ProductContent />
    <SEOPanel />
    <ImageTextPanel 
      imagePanel={<Image />}
      contentPanel={<ProductContent />}
    />
  </Layout>
)

export default IndexPage
