import React from 'react';
import './InputField.css';

const InputField = ({ label, name, type = 'text', register, placeholder }) => {
  return (
    <div className="margin-bottom">
      <label className="text-sm-font-semibold">{label}</label>
      <input
        type={type}
        {...register(name,  { required: true })}
        className=" input-field"
        placeholder={placeholder}
      />
    </div>
  );
};

export default InputField;