import React from 'react'

const CarouselIndicator = ({ title, className, setPage}) => (
  <button 
    className="CarouselIndicator-wrapper u-flex u-flexCol u-flexAlignItemsCenter btn-plaintext" 
    onClick={setPage}
    aria-label={`set carousel to ${title}`}
  >
    <div className={`CarouselIndicator ${className || ''}`}>
      <div className="CarouselIndicator-expander"></div>
      <div className="CarouselIndicator-circle"></div>
    </div>
    <div><b>{title}</b></div>
  </button>
);

export default CarouselIndicator;