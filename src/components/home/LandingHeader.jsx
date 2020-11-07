import React from "react"
import { Link, useStaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';
import Button from "components/form-helpers/Button"
import logo from "images/logos/SULTANA_coloured.svg"
import video from "images/ocean.mp4"

const LandingHeader = props => {
  const { videoFallback } = useStaticQuery(graphql`
    query {
      videoFallback: file(relativePath: { eq: "waves-crashing.png" }) {
        childImageSharp {
          fluid(maxWidth: 1200) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      logo: file(relativePath: { eq: "waves-crashing.png" }) {
        childImageSharp {
          fluid(maxWidth: 1200) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)
  return (
  <div className="hero">
    <div className="hero-wrapper u-flex u-flexJustifyEnd u-flexAlignItemsEnd">
      <video autoPlay muted loop width="100%" className="hero-video">
        <source src={video} type="video/mp4" />
      </video>
      <Img fluid={videoFallback.childImageSharp.fluid} className="hero-video-fallback" alt="Waves crashing over a rock"/>
      <img src={logo} className="logo" alt="A company logo that looks like a bunch of grapes"/>
      <div className="hero-content">
        <h1 className="hero-title">
          Have digital problems? 
          <br />
          We have solutions
        </h1>
        <div>
          <Link to="/contact"><Button>Contact us</Button></Link>
        </div>
      </div>
    </div>
  </div>
)
  }

export default LandingHeader
