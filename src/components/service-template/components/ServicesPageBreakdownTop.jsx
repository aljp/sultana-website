import React from 'react'

const ServicesPageBreakdownTop = (props) => {
  const { title, page, pageLength } = props;

  return (
    <div className="servicesPageBreakdown-top u-flex u-flexJustifyBetween u-flexAlignItemsEnd container">
      <div className="servicesPageBreakdown-header">
        <h2 className="topper">{title}</h2>
      </div>
    </div>
  )
};

export default ServicesPageBreakdownTop;