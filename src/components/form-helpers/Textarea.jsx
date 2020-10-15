import React from 'react';

const Textarea = (props) => {
  const { label, id, value, className, labelClass, inputClass, onChange } = props;
  let classes = 'input-field'
  if (className !== undefined) {
    classes = `${classes} ${className}`
  }

  let inputClasses = 'materialize-textarea'
  if (inputClass !== undefined) {
    inputClasses = `${inputClasses} ${inputClass}`
  }
  
  return (
    <div className={classes}>
      <textarea id={id} value={value} className={inputClasses} onChange={onChange} />
      <label htmlFor={id} className={labelClass}>{label}</label>
    </div>
  );
};

export default Textarea;