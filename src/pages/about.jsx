import React from "react"
import { useStaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image'
import "materialize-css/dist/css/materialize.css"
import "styling/about.scss"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Header from "components/generic-components/header/Header"

const AboutPage = () => {
  const data = useStaticQuery(graphql`
    query {
      homeJson {
        aboutUs {
          header {
            title
            description
          }
          content
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
      headerBackground: file(relativePath: { eq: "development_header.png" }) {
        childImageSharp {
          fluid(maxWidth: 1920) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  const { header, content } = data.homeJson.aboutUs

  return (
    <Layout className="transparent">
      <SEO title="About Our Development Experts" description="Learn more about who we are and what we do"/>
      <Header
        title={header.title}
        description={header.description.map((text) => (<p>{text}</p>))}
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
