import React from 'react';
import Button from 'components/form-helpers/Button'
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
          <section className="WhatWeDoPanel" >
            <h2 className="topper title-period">What we do</h2>
            <p data-sultana-editable-id="whatWeDo">
              {data.homeJson.panelContent.whatWeDo}
            </p>
            <Button>
              <Link to="/services">See our services</Link>
            </Button>
          </section>
        )}
      />
    </div>
  )
};

export default WhatWeDoPanel;