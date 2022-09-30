import React, { useState } from "react";
import SignUp from "./SignUp";
import Success from "./Success";
const Demo = () => {
  const [formIssubmittted, setFormIsSubmitted] = useState(false);

  const submitForm = () => {
    setFormIsSubmitted(true);
  };

  return (
    <>{!formIssubmittted ? <SignUp submitForm={submitForm} /> : <Success />}</>
  );
};

export default Demo;
