import React from "react"
import { useStaticQuery, graphql } from 'gatsby';
import "materialize-css/dist/css/materialize.css"
import "styling/home.scss"
import Layout from "components/layout"
import SEO from "components/seo"
import GenericHeader from "components/generic-header/GenericHeader"
import ServiceSection from 'components/services/ServiceSection'

const ServicesPage = () => {
  const data = useStaticQuery(graphql`
    query {
      homeJson {
        services {
          title
          content {
            content
            title
          }
        }
      }
      aboutUsImage: file(relativePath: { eq: "about-us-placeholder.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1200) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)
  
  const { title, content } = data.homeJson.services
  
  return(
    <Layout>
      <SEO title="Services" />
      <GenericHeader
        preTitle="Services"
        title={title}
      />
      <div className="container">
        <div className="row">
          <div className="col s12 m8 no-padding">
            <div className="services-content">
              {content.map((service) => {
                return <ServiceSection title={service.title} content={service.content} key={service.title} />
              })}
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default ServicesPage
