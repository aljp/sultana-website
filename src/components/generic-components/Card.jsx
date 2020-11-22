import React from 'react';
import CircleSvg from "components/CircleSvg"

const Card = (props) => {
  const { icon, content, title } = props;
  
  return (
    <div
      className="service-card-wrapper"
    >
      <div className="service-card">
        <div
          className="u-flex u-flexJustifyCenter"
          style={{ marginBottom: "20px" }}
        >
          <div
            className="service-card-icon-wrapper"
            style={{ width: "100px", height: "100px" }}
          >
            <CircleSvg />
            {icon}
          </div>
        </div>
        <div><b>{title}</b></div>
        <p>
          {content}
        </p>
      </div>
    </div>
  )
};

export default Card;