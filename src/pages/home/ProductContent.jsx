import React from 'react';
import { Button } from 'react-materialize';
import { useStaticQuery, graphql } from "gatsby"
import Img from 'gatsby-image'
import ImageTextPanel from 'components/ImageTextPanel'

const ProductContent = (props) => {
  const data = useStaticQuery(graphql`
    query {
      homeJson {
        panelContent {
          content
        }
      }
      placeholderImage: file(relativePath: { eq: "luca-bravo-XJXWbfSo2f0-unsplash.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1200) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return (
    <div className="container no-margin panel-wrapper ProductContent-wrapper">
      <ImageTextPanel
        imagePanel={(<Img fluid={data.placeholderImage.childImageSharp.fluid} />)}
        contentPanel={(
          <section className="ProductContent">
            <h2>Who we are</h2>
            <p>
              {data.homeJson.panelContent.content}
            </p>
            <Button>See our product services</Button>
          </section>
        )}
      />
    </div>
  )
};

export default ProductContent;