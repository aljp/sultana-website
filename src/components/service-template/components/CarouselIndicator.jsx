import React from 'react'

const CarouselIndicator = ({ title, className }) => (
  <div className={`CarouselIndicator ${className || ''}`}>
    <div className="CarouselIndicator-expander"></div>
    <div className="CarouselIndicator-circle"></div>

  </div>
);

export default CarouselIndicator;