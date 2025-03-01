import React from 'react';
import './SelectField.css';
const SelectField = ({ label, name, options, register }) => {
  return (
    <div className="margin-bottom ">
      <label className="text-sm-font-semibold">{label}</label>
      <select
        {...register(name,  { required: true })}
        className="full-width-input"
      >
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
};

export default SelectField;