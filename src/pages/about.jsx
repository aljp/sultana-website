import React, { useState, useEffect } from "react"
import { useStaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image'
import "materialize-css/dist/css/materialize.css"
import "styling/about.scss"
import Layout from "components/layout"
import SEO from "components/seo"
import Header from "components/generic-components/header/Header"
import MainContent from "components/about/MainContent";
import Questionnaire from "components/about/Questionnaire";

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
          daniel {
            fullName
            role
            questionnaire {
              question
              answer
            }
          }
          adam {
            fullName
            role
            questionnaire {
              question
              answer
            }
          }
        }
      }
      headerImage: file(relativePath: { eq: "tree-5102896_1920.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1920) {
            ...GatsbyImageSharpFluid
          }
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

  const [currentPage, setCurrentPage] = useState('main')
  const { header, content } = data.homeJson.aboutUs

  useEffect(() => {
    if (window && window.location.hash) setCurrentPage(window.location.hash.substring(1,))
  }, [])

  const handlePageChange = (page) => async () => {
    setCurrentPage(page)
  }


  return (
    <Layout className="transparent">
      <SEO title="About Our Development Experts" description="Learn more about who we are and what we do"/>
      <Header
        title={header.title}
        backgroundImage={data.headerImage.childImageSharp.fluid}
        description={header.description.map((text) => (<p>{text}</p>))}
      />
      <div className="about-container container">
        <div className="row">
          <h2 className="title-period">Meet the team</h2>
          <MainContent content={content} page="main" />
        </div>
        <div className="row">
          <p style={{textAlign:'center'}}><small>Click on an image to find out more about us</small></p>
          <div className="about-content no-margin u-flex u-flexJustifyCenter u-flexWrap u-flexAlignItemsCenter">
            <button className="btn-plaintext" onClick={handlePageChange('daniel')}>
              <Img fluid={data.danielImage.childImageSharp.fluid} className="AboutUs-buttonImage" />
              <p><b>Daniel Teale</b></p>
            </button>
            <button className="btn-plaintext" onClick={handlePageChange('adam')}>
              <Img fluid={data.adamImage.childImageSharp.fluid} className="AboutUs-buttonImage" />
              <p><b>Adam Jacquier-Parr</b></p>
            </button>
          </div>
          {currentPage === 'daniel' && (
            <Questionnaire
              content={data.homeJson.aboutUs.daniel}
              image={data.danielImage.childImageSharp.fluid}
              page="daniel"
            />
          )}
          {currentPage === 'adam' && (
            <Questionnaire
              content={data.homeJson.aboutUs.adam}
              image={data.adamImage.childImageSharp.fluid}
              page="adam"
            />
          )}
          
        </div>
      </div>
    </Layout>
  )
}

export default AboutPage
