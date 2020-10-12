import React from 'react';

const ServiceSection = (props) => {
  const { title, content } = props;

  return (
    <>
    <h2>{title}</h2>
    {content.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
    </>
  )
};

export default ServiceSection;