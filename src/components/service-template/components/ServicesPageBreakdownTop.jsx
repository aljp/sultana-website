import React from 'react'

const ServicesPageBreakdownTop = (props) => {
  const { title, page, pageLength } = props;

  return (
    <div className="servicesPageBreakdown-top u-flex u-flexJustifyBetween container">
      <div className="servicesPageBreakdown-header">
        <h2 className="topper">{title}</h2>
      </div>
      <div className="servicesPageBreakdown-counter u-flex u-flexAlignItemsEnd">
        {[...Array(pageLength).keys()].map((index) => (
          <div className={page === index ? "active" : ''}>0{index + 1}</div>
        ))}
      </div>
    </div>
  )
};

export default ServicesPageBreakdownTop;