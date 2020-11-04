import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Layout from 'components/layout';
import ServicesPageTemplate from 'components/service-template/ServicesPageTemplate';
import Header from "components/generic-components/header/Header"


const DevelopmentPage = (props) => {
  const query = useStaticQuery(graphql`
    query {
      homeJson {
        optimisation {
          header {
            title
            description
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
    }
  `)
  
  const { headerBackground, consultationBackground, lifeCycleImage, contactUsImage } = query;
  const images = { headerBackground, consultationBackground, lifeCycleImage, contactUsImage }
  const data = query.homeJson.optimisation;

  return (
    <Layout className="services-page">
      <ServicesPageTemplate>
        <Header 
          title={data.header.title} 
          description={data.header.description.map((text) => {return (<p>{text}</p>)})} 
          backgroundImage={images.headerBackground.childImageSharp.fluid} 
        />
      </ServicesPageTemplate>
    </Layout>
  );
}

export default DevelopmentPage;
