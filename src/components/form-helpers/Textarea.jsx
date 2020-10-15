import React from 'react';

const Textarea = (props) => {
  const { label, id, value, className, labelClass, inputClass, onChange } = props;
  const classes = `input-field ${className || ''}`
  const inputClasses = `materialize-textarea ${inputClass || ''}`
  
  return (
    <div className={classes}>
      <textarea id={id} value={value} className={inputClasses} onChange={onChange} />
      <label htmlFor={id} className={labelClass}>{label}</label>
    </div>
  );
};

export default Textarea;