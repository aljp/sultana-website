import React from 'react'
import BackgroundImage from 'gatsby-background-image';
import ContactForm from 'components/contact/ContactForm';

const ServicesPageConsultation = (props) => {
  const { image } = props;
  const { title, content } = props.data;

  return (
    <div className="servicesConsultation-wrapper">
      <BackgroundImage fluid={image} className="servicesConsultation">
        <div className="servicesConsultation-content container u-flex u-flexJustifyCenter u-flexAlignItemsCenter">
          <div className="servicesConsultation-text">
            <div className="servicesConsultation-header topper">
              <h2 className="title-period">{title}</h2>
            </div>
            <div className="servicesConsultation-paragraph">
              <p>{content}</p>
            </div>
          </div>
          <ContactForm />
        </div>
        <div className="overlay" />
      </BackgroundImage>
    </div>
  );
};

export default ServicesPageConsultation;