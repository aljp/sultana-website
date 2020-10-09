import React from "react"
import { Row, Col } from "react-materialize"
import "materialize-css/dist/css/materialize.css"
import "styling/home.scss"
import Layout from "../components/layout"
import SEO from "../components/seo"
import GenericHeader from "../components/generic-header/GenericHeader"

const AboutPage = () => (
  <Layout>
    <SEO title="About Us" />
    <GenericHeader />
    <div className="about-content">
      <p>A little bit about us...</p>
      <p>
        We're a team of two Sydney based web developers who have been working in
        the industry for over 10 years. With our years of experience behind us
        we decided to take the leap and start Sultana Digital.
      </p>
      <p>THIS NEEDS MORE CONTENT, IMAGES, ETC.? OUR FACES?</p>
      <h3 style={{ textAlign: "center" }}>How we deliver</h3>
      <Row>
        <Col m={3}>
          <span>We Deliver Quality!</span>
        </Col>
        <Col m={3}>
          <span>We Deliver Quality!</span>
        </Col>
        <Col m={3}>
          <span>We Deliver Quality!</span>
        </Col>
        <Col m={3}>
        <span>We Deliver Quality!</span>
        </Col>
      </Row>
    </div>
  </Layout>
)

export default AboutPage
