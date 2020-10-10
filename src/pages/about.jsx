import React from "react"
import { Row, Col } from "react-materialize"
import "materialize-css/dist/css/materialize.css"
import "styling/about.scss"
import Layout from "../components/layout"
import SEO from "../components/seo"
import GenericHeader from "../components/generic-header/GenericHeader"

const AboutPage = () => (
  <Layout>
    <SEO title="About Us" />
    <GenericHeader
      preTitle="About Us"
      title="Web design and development firm based in Sydney"
    />
    <div className="about-container container">
      <div className="row">
        <div className="col s12 m8 no-padding">
          <div className="about-content">
            <p>
              We're a team of two Sydney based web developers who have been
              working in the industry for over 10 years. With our years of
              experience behind us we decided to take the leap and start Sultana
              Digital.
            </p>
            <p>
              We specialise in helping business and individuals realise their
              dream website, whether it's a new website for your restaurant to
              take bookings, or a boutique high end web store. We'll work with
              you to make it happen.
            </p>
          </div>
          <div className="about-content no-margin">
            <img src="http://lorempixel.com/400/200/sports/" />
          </div>
        </div>
      </div>
    </div>
  </Layout>
)

export default AboutPage
