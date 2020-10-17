import React, { useRef } from 'react';

const TextInput = (props) => {
  const { label, id, value, className, inputClass, labelClass, onChange, type } = props;
  const classes = `input-field ${className || ''}`;
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
      <input
        id={id}
        type={type || "text"}
        className={inputClass || ''}
        value={value} 
        onChange={onChange} 
        onFocus={handleFocus} 
        onBlur={handleBlur}
      />
      <label htmlFor={id} className={labelClass || ''} ref={labelRef}>{label}</label>
    </div>
  );
};

export default TextInput;