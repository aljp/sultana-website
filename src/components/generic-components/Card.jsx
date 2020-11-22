import React from 'react';
import { Link } from 'gatsby'
import CircleSvg from "components/CircleSvg"

const CardContent = (props) => {
  const { icon, content, title, type } = props;

  return (
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
  )
}

const LinkedCardContent = (props) => {
  const { icon, content, title, type } = props;
  const link = type ? `/${type}` : `#`

  return (
    <Link to={link}>
      <CardContent {...props}/>
    </Link>
  )
}

const Card = (props) => {
  const { icon, content, title, type } = props;

  const link = type ? `/${type}` : undefined
  let contentElement;

  if (link) {
    contentElement = <LinkedCardContent {...props}/>
  } else {
    contentElement = <CardContent {...props}/>
  }
  
  return (
    <div
      className="service-card-wrapper "
    >
    {contentElement}
    </div>
  )
};

export default Card;