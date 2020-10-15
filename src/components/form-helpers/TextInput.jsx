import React from 'react';

const TextInput = (props) => {
  const { label, id, value, className, inputClass, labelClass, onChange, type } = props;
  const classes = `input-field ${className}`;


  return (
    <div className={classes}>
      <input id={id} type={type || "text"} className={inputClass} value={value} onChange={onChange} />
      <label htmlFor={id} className={labelClass}>{label}</label>
    </div>
  );
};

export default TextInput;