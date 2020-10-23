import React from 'react';
import BackgroundImage from 'gatsby-background-image';

const ServicesPageHeader = (props) => {
  const { title, description, backgroundImage } = props;

  const descriptionHtml = { __html: description }
  return (
    <>
      <div className="servicesHeader-wrapper">
        <BackgroundImage 
          fluid={backgroundImage}
          className="servicesHeader"
        />
        <div className="servicesHeader-content">
          <h1><b>{title}</b></h1>
          <p dangerouslySetInnerHTML={descriptionHtml}></p>
        </div>
        <div className="overlay"></div>
      </div>
    </>
  )
};

export default ServicesPageHeader;