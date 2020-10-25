import React from 'react'

const CarouselIndicator = ({ title, className }) => (
  <div className="CarouselIndicator-wrapper u-flex u-flexCol u-flexAlignItemsCenter">
    <div className={`CarouselIndicator ${className || ''}`}>
      <div className="CarouselIndicator-expander"></div>
      <div className="CarouselIndicator-circle"></div>

    </div>
    <div><b>{title}</b></div>
  </div>
);

export default CarouselIndicator;