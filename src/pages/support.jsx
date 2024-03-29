import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Layout from "components/layout"
import ServicesPageTemplate from "components/service-template/ServicesPageTemplate"
import { ReactComponent as Retention } from "images/logos/flow.svg"
import { ReactComponent as Sales } from "images/logos/money-flow.svg"
import { ReactComponent as Experience } from "images/logos/idea.svg"
import Header from "components/generic-components/header/Header"
import ServicesPageAdvantages from "../components/service-template/ServicesPageAdvantages";
import ServicesPageConsultation from "../components/service-template/ServicesPageConsultation";
import ServicesPageBreakdown from "../components/service-template/ServicesPageBreakdown";
import ServicesPageContactUs from "../components/service-template/ServicesPageContactUs";

const OptimisationPage = props => {
  const query = useStaticQuery(graphql`
    query {
      homeJson {
        optimisation {
          header {
            title
            description
          }
          advantages {
            title
            blurb
            cards {
              content
              title
            }
          }
          breakdown {
            title
            pages {
              content
              title
            }
            price {
              amount
              description
            }
          }
          shared {
            consultation {
              content
              title
            }
          }
        }
      }
      headerBackground: file(relativePath: { eq: "computer-767781_1920.jpg" }) {
      childImageSharp {
          fluid(maxWidth: 1920) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      consultationBackground: file(relativePath: { eq: "consultation-image.png" }) {
        childImageSharp {
          fluid(maxWidth: 1920) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      lifeCycleImage: file(relativePath: { eq: "work-731198_960_720.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1920) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      contactUsImage: file(relativePath: { eq: "contact_us_image.png" }) {
        childImageSharp {
          fluid(maxWidth: 1920) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  const {
    headerBackground,
    consultationBackground,
    lifeCycleImage,
    contactUsImage,
  } = query
  const images = {
    headerBackground,
    consultationBackground,
    lifeCycleImage,
    contactUsImage,
  }
  const data = query.homeJson.optimisation
  const iconMap = {
    retention: <Retention />,
    sales: <Sales />,
    experience: <Experience />
  }

  return (
    <Layout className="services-page">
      <ServicesPageTemplate>
        <Header
          title={data.header.title}
          description={data.header.description.map(text => {
            return <p>{text}</p>
          })}
          backgroundImage={images.headerBackground.childImageSharp.fluid}
        />
        <ServicesPageAdvantages data={data.advantages} iconMap={iconMap} />
        <ServicesPageConsultation
          data={data.shared.consultation}
          image={images.consultationBackground.childImageSharp.fluid}
        />
        <ServicesPageBreakdown
          data={data.breakdown}
          image={images.lifeCycleImage.childImageSharp.fluid}
        />
        <ServicesPageContactUs
          image={images.contactUsImage.childImageSharp.fluid}
        />
      </ServicesPageTemplate>
    </Layout>
  )
}

export default OptimisationPage
