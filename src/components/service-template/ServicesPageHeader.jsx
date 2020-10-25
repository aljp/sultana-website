import React from 'react';
import BackgroundImage from 'gatsby-background-image';

const ServicesPageHeader = (props) => {
  const { backgroundImage } = props;
  const { title, description } = props.data;

  const descriptionHtml = { __html: description }
  return (
    <>
      <div className="servicesHeader-wrapper">
        <BackgroundImage
          fluid={backgroundImage}
          className="servicesHeader"
        >
          <div className="servicesHeader-content container u-flex u-flexCol u-flexAlignItemsCenter u-flexJustifyCenter">
            <h1><b>{title}</b></h1>
            <p dangerouslySetInnerHTML={descriptionHtml}></p>
          </div>
          <div className="overlay"></div>
        </BackgroundImage>
      </div>
    </>
  )
};

export default ServicesPageHeader;