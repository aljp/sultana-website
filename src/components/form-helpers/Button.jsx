import React from 'react';

const Button = (props) => {
  const { className, onClick, type, children } = props;
  const classes = `waves-effect waves-light btn ${className}`
  
  return (
    <button 
      type={type || 'button'}
      onClick={onClick}
      className={classes}
    >
      {children}
  </button>
  );
};

export default Button;