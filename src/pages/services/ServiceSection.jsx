import React from 'react';

const ServiceSection = (props) => {
  const { title, content } = props;

  return (
    <>
    <h4>{title}</h4>
    {content.map((paragraph) => <p>{paragraph}</p>)}
    </>
  )
};

export default ServiceSection;