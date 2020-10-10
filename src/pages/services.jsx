import React from "react"
import { Row, Col } from "react-materialize"
import "materialize-css/dist/css/materialize.css"
import "styling/home.scss"
import Layout from "../components/layout"
import SEO from "../components/seo"
import GenericHeader from "../components/generic-header/GenericHeader"

const ServicesPage = () => (
  <Layout>
    <SEO title="Services" />
    <GenericHeader
      preTitle="Services"
      title="A web design &amp; development firm based in Sydney"
    />
    <div className="container">
      <div className="row">
        <div className="col s12 m8 offset-m2">
          <div className="services-content">
            <h4>Development</h4>
            <span style={{ fontSize: "1rem" }}>How can we help?</span>
            <p>
              When you have an idea for a website you'll want to work with
              dedicated individuals to bring it to life. We have experience
              working with others to build websites that are beautiful, fast,
              and effective.
              {/** designers, copy writers, etc. */}
            </p>
            <h4>SEO</h4>
            <span style={{ fontSize: "1rem" }}>What does that mean?</span>
            <p>
              <b>Search engine optimisation</b> is important for your website to
              be relevant and easy to find. We understand how to analyse your
              business, website, or idea, and discover a great keyword strategy
              to make your website more relevant and search friendly.
            </p>
            <h4>Optimisation</h4>
            <span style={{ fontSize: "1rem" }}>Why does it matter?</span>
            <p>
              Having a fast and responsive website translates into an improved
              user experience and increased sales.
              {/* TODO: Link to some articles services speed relating to sales */}
              We can help make your website load as fast as possible so your
              users spend more of their time browsing your website.
            </p>
          </div>
        </div>
      </div>
    </div>
  </Layout>
)

export default ServicesPage
