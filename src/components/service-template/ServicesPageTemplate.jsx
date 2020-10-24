import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import ServicesPageHeader from 'components/service-template/ServicesPageHeader';
import ServicesPageAdvantages from 'components/service-template/ServicesPageAdvantages';
import ServicesPageConsultation from 'components/service-template/ServicesPageConsultation';
import ServicesPageBreakdown from 'components/service-template/ServicesPageBreakdown';
import ServicesPageContactUs from 'components/service-template/ServicesPageContactUs';
import { ReactComponent as Development } from "images/serviceCards/004-programming-1.svg"

const data = {
  "shared": {
    "consultation": {
      "title": "Get a free consultation",
      "content": "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Culpa quo doloribus ipsum optio magnam recusandae, iste accusamus veniam numquam aperiam provident alias nihil sint ut cum velit cupiditate assumenda voluptate."
    }
  },
  "header": {
    "title": 'Development',
    "description": "How can we help?<br /> When you have an idea for a website you'll want to work with dedicated individuals to bring it to life. We have experience working with others to build websites and applications that are beautiful, fast, and effective."
  },
  "advantages": {
    "blurb": "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iste omnis esse, veritatis, rem temporibus rerum sit dicta doloremque molestias ullam eum unde saepe ad odit voluptatum quaerat non, amet a?",
    "cards": [
      {
        "title": 'Lorem',
        "content": "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ea est ipsam facere at sed, corporis atque vel aspernatur non ipsum cumque commodi voluptate repudiandae deserunt harum facilis iure placeat libero."
      },
      {
        "title": 'Lorem',
        "content": "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ea est ipsam facere at sed, corporis atque vel aspernatur non ipsum cumque commodi voluptate repudiandae deserunt harum facilis iure placeat libero."
      },
      {
        "title": 'Lorem',
        "content": "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ea est ipsam facere at sed, corporis atque vel aspernatur non ipsum cumque commodi voluptate repudiandae deserunt harum facilis iure placeat libero."
      },
      {
        "title": 'Lorem',
        "content": "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ea est ipsam facere at sed, corporis atque vel aspernatur non ipsum cumque commodi voluptate repudiandae deserunt harum facilis iure placeat libero."
      },
    ]
  },
  "breakdown": {
    "title": "Our Software Life Cycle",
    "pages": [
      { 
        "title": "Planning",
        "content": "Once we understand what you’re looking for, we’ll work out a step-by-step plan to make the software a reality"
      },
      { 
        "title": "Planning",
        "content": "Once we understand what you’re looking for, we’ll work out a step-by-step plan to make the software a reality"
      },
      { 
        "title": "Planning",
        "content": "Once we understand what you’re looking for, we’ll work out a step-by-step plan to make the software a reality"
      },
      { 
        "title": "Planning",
        "content": "Once we understand what you’re looking for, we’ll work out a step-by-step plan to make the software a reality"
      }
    ],
    "price": {
      "amount": 3000,
      "description": "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis sunt, possimus consequatur perferendis, nulla corrupti totam delectus culpa vitae nisi recusandae porro non deserunt quisquam nobis nam provident eos nihil."
    }
  }
}

const ServicesPageTemplate = (props) => {
  const image = useStaticQuery(graphql`
    query {
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
    }
  `)

  const iconMap = {
    Lorem: <Development />,
  }

  return (
    <>
      <ServicesPageHeader data={data.header} backgroundImage={image.headerBackground.childImageSharp.fluid} />
      <ServicesPageAdvantages data={data.advantages} iconMap={iconMap} />
      <ServicesPageConsultation data={data.shared.consultation} image={image.consultationBackground.childImageSharp.fluid} />
      <ServicesPageBreakdown data={data.breakdown} image={image.lifeCycleImage.childImageSharp.fluid}/>
      <ServicesPageContactUs />
    </>
  )
};

export default ServicesPageTemplate;