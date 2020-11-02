import React from 'react';
import CarouselIndicator from 'components/service-template/components/CarouselIndicator';

const ServicesPageBreakdownBottom = (props) => {
  const { price, carouselPages, page } = props;

  return (
    <div className="servicesPageBreakdown-bottom">
      <div className="container">
        <div className="row u-flex u-flexAlignItemsEnd">
          <div className="col l4" style={{ position: 'relative' }}>
            <div className="topper">
              <h2 className="title-period"><b>Price</b></h2>
            </div>
          </div>
          <div className="servicesPageBreakdown-bottomHeader col l10 m8">
            <span style={{ fontColor: 'gray' }}>from</span>
            <span> ${price.amount}</span>
          </div>
        </div>
        <div className="row">
          <div className="servicesPageBreakdown-bottomText col l7">
            <p>{price.description}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicesPageBreakdownBottom;