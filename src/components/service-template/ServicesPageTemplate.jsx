import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import 'styling/services-template.scss';
import BackgroundImage from 'gatsby-background-image';
import ServicesPageHeader from 'components/service-template/ServicesPageHeader';
import ServicesPageAdvantages from 'components/service-template/ServicesPageAdvantages';
import ContactForm from 'components/contact/ContactForm';
import { ReactComponent as Development } from "images/serviceCards/004-programming-1.svg"

const data = {
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
      contactUsBackground: file(relativePath: { eq: "consultation-image.png" }) {
        childImageSharp {
          fluid(maxWidth: 1920) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  const { title, description } = data.header
  const { blurb, cards } = data.advantages
  const iconMap = {
    Lorem: <Development />,
  }

  return (
    <>
      <ServicesPageHeader title={title} description={description} backgroundImage={image.headerBackground.childImageSharp.fluid} />
      <ServicesPageAdvantages blurb={blurb} cards={cards} iconMap={iconMap} />
      <div className="servicesContactUs-wrapper">
        <BackgroundImage fluid={image.contactUsBackground.childImageSharp.fluid} className="servicesContactUs">
          <div className="servicesContactUs-content container u-flex u-flexJustifyCenter u-flexAlignItemsCenter">
            <div className="servicesContactUs-text">
              <div className="servicesContactUs-header topper">
                <h2 className="title-period">Get a free consultation</h2>
              </div>
              <div className="servicesContactUs-paragraph">
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus eos est animi eum ratione, earum qui repudiandae provident aut sit? Deserunt molestiae magnam doloremque aliquid numquam? Magnam commodi esse aliquam.</p>
              </div>
            </div>
            <ContactForm />
          </div>
          <div className="overlay" />

        </BackgroundImage>

      </div>
    </>
  )
};

export default ServicesPageTemplate;