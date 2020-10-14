import React from "react"
import { useStaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image'
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
      adamImage: file(relativePath: { eq: "adam_portrait.png" }) {
        childImageSharp {
          fluid(maxWidth: 300) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      danielImage: file(relativePath: { eq: "daniel.png" }) {
        childImageSharp {
          fluid(maxWidth: 300) {
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
              {content.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
            </div>
            <div className="about-content no-margin u-flex u-flexWrap u-flexAlignItemsCenter" style={{paddingTop: '40px'}}>
            <div>
              <Img fluid={data.danielImage.childImageSharp.fluid} style={{width: '300px', marginRight: '24px'}} />
              <p><b>Daniel Teale</b></p>
            </div>
            <div>
              <Img fluid={data.adamImage.childImageSharp.fluid} style={{width: '300px'}} />
              <p><b>Adam Jacquier-Parr</b></p>
            </div> 
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default AboutPage
