/* eslint-disable react/no-unknown-property */
/* eslint-disable react/prop-types */
import React from "react";
import { useState } from "react";

const FormInputs = (props) => {
  const [focused, setFocused] = useState(false);

  // eslint-disable-next-line no-unused-vars
  const { label, onChange, id, errorMessage, ...inputProps } = props;

  const handleFocus = () => {
    setFocused(true);
  };

  return (
    <div>
      <label className="form-label">{label}</label>
      <input
        className="form-control"
        {...inputProps}
        onChange={onChange}
        onBlur={handleFocus}
        focused={focused.toString()}
      />
      <br />
      <span>{errorMessage}</span>
    </div>
  );
};
export default FormInputs;
