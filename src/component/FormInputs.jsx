import { useState } from "react";

const FormInputs = (props) => {
  const [focused, setFocused] = useState(false);

  const { label, onChange, id, errorMessage, ...inputProps } = props;

  const handleFocus = (e) => {
    setFocused(true);
  };

  return (
    <div className="">
      <div className="">
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
    </div>
  );
};

export default FormInputs;
