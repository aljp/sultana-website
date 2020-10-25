import React from 'react';
import CircleSvg from "components/CircleSvg"

const Card = (props) => {
  const { icon, content, body } = props;
  
  return (
    <div
      className="service-card-wrapper"
      role="link"
      tabIndex={0}
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
        <p>
          {content}
        </p>
        <div className="card-body">{body}</div>
      </div>
    </div>
  )
};

export default Card;