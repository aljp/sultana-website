import React from "react"
import { useStaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image'
import { Row, Col } from "react-materialize"
import "materialize-css/dist/css/materialize.css"
import "styling/about.scss"
import Layout from "../components/layout"
import SEO from "../components/seo"
import GenericHeader from "../components/generic-header/GenericHeader"

const AboutPage = () => {
  const data = useStaticQuery(graphql`
    query {
      homeJson {
        aboutUs {
          content
          title
        }
      }
      aboutUsImage: file(relativePath: { eq: "about-us-placeholder.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1200) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  const { title, content } = data.homeJson.aboutUs

  return (
    <Layout>
      <SEO title="About Us" />
      <GenericHeader
        preTitle="About Us"
        title={title}
      />
      <div className="about-container container">
        <div className="row">
          <div className="col s12 m8 no-padding">
            <div className="about-content">
              {content.map((paragraph) => <p>{paragraph}</p>)}
            </div>
            <div className="about-content no-margin">
              <Img fluid={data.aboutUsImage.childImageSharp.fluid} />
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default AboutPage
