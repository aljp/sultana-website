import React from 'react';
import CarouselIndicator from 'components/service-template/components/CarouselIndicator';

const ServicesPageBreakdownBottom = (props) => {
  const { price, carouselPages, page } = props;

  return (
    <div className="servicesPageBreakdown-bottom">
      <div className="servicesPageBreakdown-indicator">
      <h5 className="container"><b>Stages of development</b></h5>
        <div className="servicesPageBreakdown-bottomIndicatorsContainer">
          <div className="container  u-flex u-flexJustifyBetween">
            {[...carouselPages.map((page) => page.title)].map((title, index) => (
              <CarouselIndicator className={`${index === page ? 'active' : ''}`} title={title} />
            ))}
          </div>
          <div className="strike-through-container">
            <div className="strike-through"></div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="servicesPageBreakdown-bottomHeader u-flex u-flexAlignItemsEnd">
          <div style={{ position: 'relative' }}>
            <div className="topper">
              <h2 className="title-period"><b>Price</b></h2>
            </div>
          </div>
          <span style={{ fontColor: 'gray' }}>from</span>
          <span>${price.amount}</span>
        </div>
        <div className="servicesPageBreakdown-bottomText">
          <p>{price.description}</p>
        </div>
      </div>

    </div>
  );
};

export default ServicesPageBreakdownBottom;