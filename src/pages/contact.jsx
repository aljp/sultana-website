import React from "react"
import Layout from "components/layout"
import SEO from "components/seo"
import ContactForm from "components/contact/ContactForm"
import { useStaticQuery, graphql } from 'gatsby';

import BackgroundImage from "gatsby-background-image";

const Contact = () => {
  const data = useStaticQuery(graphql`
    query {
      mapBackground: file(relativePath: { eq: "sydney-map.png" }) {
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
      <SEO title="Contact" />
      <div>
      <BackgroundImage
          fluid={data.mapBackground.childImageSharp.fluid}
          style={{ zIndex: "-1", position: 'absolute', width: '100%', height: '100%' }}
        ></BackgroundImage>
      </div>
      <div style={{ padding: "16px", paddingTop: '6vh' }}>
        <div className="row">
          <div className="contactFormWrapper" style={{ zIndex: "1" }}>
            <ContactForm />
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default Contact
