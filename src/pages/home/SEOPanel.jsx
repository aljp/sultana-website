import React from 'react';
import { Button } from 'react-materialize';
import { useStaticQuery, graphql } from "gatsby"
import Img from 'gatsby-image'
import ImageTextPanel from 'components/ImageTextPanel'

const SEOPanel = (props) => {
  const data = useStaticQuery(graphql`
  query {
    homeJson {
      panelContent {
        seo
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
        <section className="ProductContent">
          <h2>Quality products</h2>
          <p>
            {data.homeJson.panelContent.seo}
          </p>
          <Button>See our product services</Button>
        </section>
      )}
    />
  </div>
)
};

export default SEOPanel;