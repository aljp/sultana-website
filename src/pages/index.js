import React from "react"
import { graphql, useStaticQuery } from 'gatsby';
import Layout from "../components/layout"
import SEO from "../components/seo"
import LandingHeader from "components/home/LandingHeader"
import WhatWeDoPanel from "components/home/WhatWeDoPanel"
import ServiceCards from "components/home/ServicesCards";
import WhoWeArePanel from "components/home/WhoWeArePanel";
import ServicesPageContactUs from "../components/service-template/ServicesPageContactUs"

const IndexPage = () => {
  const query = useStaticQuery(graphql`
    query {
      contactUsImage: file(relativePath: { eq: "contact_us_image.png" }) {
        childImageSharp {
          fluid(maxWidth: 1920) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return (
    <Layout>
      <SEO title="Home" />
      <LandingHeader />
      <WhoWeArePanel />
      <WhatWeDoPanel />
      <ServiceCards />
      <ServicesPageContactUs image={query.contactUsImage.childImageSharp.fluid} />
    </Layout>
  );
};

export default IndexPage
