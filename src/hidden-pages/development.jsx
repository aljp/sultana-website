import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Layout from 'components/layout';
import ServicesPageTemplate from 'components/service-template/ServicesPageTemplate';
import { ReactComponent as Development } from "images/serviceCards/004-programming-1.svg"
import Header from "../components/generic-components/header/Header";
import ServicesPageAdvantages from "../components/service-template/ServicesPageAdvantages";
import ServicesPageConsultation from "../components/service-template/ServicesPageConsultation";
import ServicesPageBreakdown from "../components/service-template/ServicesPageBreakdown";
import ServicesPageContactUs from "../components/service-template/ServicesPageContactUs";

const DevelopmentPage = (props) => {
  const query = useStaticQuery(graphql`
    query {
      homeJson {
        development {
          shared {
            consultation {
              content
              title
            }
          }
          header {
            title
            description
          }
          advantages {
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
        }
      }
      headerBackground: file(relativePath: { eq: "development_header.png" }) {
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
      lifeCycleImage: file(relativePath: { eq: "life_cycle_image.png" }) {
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
  
  const { headerBackground, consultationBackground, lifeCycleImage, contactUsImage } = query;
  const images = { headerBackground, consultationBackground, lifeCycleImage, contactUsImage }
  const data = query.homeJson.development;
  
  const iconMap = {
    Lorem: <Development />,
  }

  return (
    <Layout className="services-page">
      <ServicesPageTemplate>
        <Header 
          title={data.header.title} 
          description={data.header.description.map((text) => {return (<p>{text}</p>)})} 
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
        <ServicesPageContactUs image={images.contactUsImage.childImageSharp.fluid}/>
      </ServicesPageTemplate>
    </Layout>
  );
}

export default DevelopmentPage;
