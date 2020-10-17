import React, { useRef } from 'react';

const Textarea = (props) => {
  const { label, id, value, className, labelClass, inputClass, onChange } = props;
  const classes = `input-field ${className || ''}`
  const inputClasses = `materialize-textarea ${inputClass || ''}`
  const labelRef = useRef(null)
  
  const handleFocus = () => {
    labelRef.current.classList.add('active')
  }

  const handleBlur = () => {
    if (value) return;
    labelRef.current.classList.remove('active')
  }

  return (
    <div className={classes}>
      <textarea 
        id={id} 
        value={value}
        className={inputClasses} 
        onChange={onChange} 
        onFocus={handleFocus} 
        onBlur={handleBlur}
      />
      <label htmlFor={id} className={labelClass} ref={labelRef}>{label}</label>
    </div>
  );
};

export default Textarea;