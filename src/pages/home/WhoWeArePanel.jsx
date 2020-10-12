import React from 'react';
import { Button } from 'react-materialize';
import { useStaticQuery, graphql, Link } from "gatsby"
import Img from 'gatsby-image'
import ImageTextPanel from 'components/ImageTextPanel'

const WhoWeArePanel = (props) => {
  const data = useStaticQuery(graphql`
  query {
    homeJson {
      panelContent {
        whoWeAre
      }
    }
    placeholderImage: file(relativePath: { eq: "diggity-marketing-s8HyIEe7lF0-unsplash.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1920) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`)

return (
  <div className="container no-margin panel-wrapper">
    <ImageTextPanel
      reverse={true}
      imagePanel={(<Img fluid={data.placeholderImage.childImageSharp.fluid} />)}
      contentPanel={(
        <section className="WhatWeDoPanel">
          <h2>Who we are</h2>
          <p>
            {data.homeJson.panelContent.whoWeAre}
          </p>
          <Button>
            <Link to="/about">Read more</Link>
          </Button>
        </section>
      )}
    />
  </div>
)
};

export default WhoWeArePanel;