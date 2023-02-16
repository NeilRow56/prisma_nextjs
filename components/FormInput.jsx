import React from "react";

const FormInput = ({ name, placeholder, type }) => {
  return (
    <input
      className="form-input rounded-md border-none "
      type={type}
      name={name}
      placeholder={placeholder}
    />
  );
};

export default FormInput;
