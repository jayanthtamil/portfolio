import React from 'react';
import { ErrorMessage, useField } from 'formik';

export const TextField = ({ label, ...props }) => {
  const [field, meta] = useField(props);
  return (
    <div className='input-field'>
      <label htmlFor={field.name}>{label}</label>
      <input
        className={meta.touched && meta.error ? 'error-input' : ''}
        {...field}
        {...props}
        autoComplete='off'
      />
      <ErrorMessage component='div' name={field.name} className='error' />
    </div>
  );
};

export const TextArea = ({ label, ...props }) => {
    const [field, meta] = useField(props);
  
    return (
      <div className='textarea-field'>
        <label htmlFor={field.name}>{label}</label>
        <textarea
          className={meta.touched && meta.error ? 'error-input' : ''}
          {...field}
          {...props}
          cols='30'
          rows='10'
        />
        <ErrorMessage component='div' name={field.name} className='error textarea-error' />
      </div>
    );
  };