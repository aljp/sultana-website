import React from 'react';
import { Button } from 'react-materialize';
import { useStaticQuery, graphql, Link } from "gatsby"
import Img from 'gatsby-image'
import ImageTextPanel from 'components/ImageTextPanel'

const WhatWeDoPanel = (props) => {
  const data = useStaticQuery(graphql`
    query {
      homeJson {
        panelContent {
          whatWeDo
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
    <div className="container no-margin panel-wrapper WhatWeDoPanel-wrapper">
      <ImageTextPanel
        imagePanel={(<Img fluid={data.placeholderImage.childImageSharp.fluid} />)}
        contentPanel={(
          <section className="WhatWeDoPanel">
            <h2>Who we are</h2>
            <p>
              {data.homeJson.panelContent.whatWeDo}
            </p>
            <Button>
            <Link to="/services">Read more</Link></Button>
          </section>
        )}
      />
    </div>
  )
};

export default WhatWeDoPanel;