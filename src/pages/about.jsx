import React, { useState, useRef, useEffect } from "react"
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
            question
            answer
          }
          adam {
            question
            answer
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
  const contentRef = useRef(null);
  const { header, content } = data.homeJson.aboutUs

  useEffect(() => {
    if (window && window.location.hash) setCurrentPage(window.location.hash.substring(1,))
  }, [])

  const handlePageChange = (page) => async () => {
    await setCurrentPage(page)
    if (window) window.location = `#${page}`;
  }


  return (
    <Layout className="transparent">
      <SEO title="About Us" />
      <Header
        ref={contentRef}
        title={header.title}
        description={header.description.map((text) => (<p>{text}</p>))}
      />
      <div className="about-container container">
        <div className="row">
          <MainContent content={content} page="main" />
        </div>
        <div className="row">
          <h2 className="title-period">Meet the team</h2>
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
          <div className="about-content no-margin u-flex u-flexJustifyCenter u-flexWrap u-flexAlignItemsCenter" style={{ paddingTop: '40px' }}>
            <button className="btn-plaintext" onClick={handlePageChange('daniel')}>
              <Img fluid={data.danielImage.childImageSharp.fluid} className="AboutUs-buttonImage" />
              <p><b>Daniel Teale</b></p>
            </button>
            <button className="btn-plaintext" onClick={handlePageChange('adam')}>
              <Img fluid={data.adamImage.childImageSharp.fluid} className="AboutUs-buttonImage" />
              <p><b>Adam Jacquier-Parr</b></p>
            </button>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default AboutPage
