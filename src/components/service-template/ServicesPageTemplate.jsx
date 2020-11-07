import React from 'react';
import PropTypes from "prop-types"

const ServicesPageTemplate = (props) => {
  const { children } = props;

  return (
    <>
      {children}
    </>
  )
};

ServicesPageTemplate.propTypes = {
  children: PropTypes.node.isRequired,
}

export default ServicesPageTemplate;