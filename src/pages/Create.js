import axios from "axios";
import React, { useState } from "react";
import baseURL from "../APIs/Crud";
import { useNavigate } from "react-router-dom";
import FormInputs from "../component/FormInputs";
import {
  EMAIL_REGEX,
  F_NAME_REGEX,
  L_NAME_REGEX,
  PASSWORD_REGEX,
  U_NAME_REGEX,
} from "../component/regex";

export default function Create() {
  let navigate = useNavigate();

  const [values, setValues] = useState({
    firstname: "",
    lastname: "",
    username: "",
    email: "",
    dob: "",
    password: "",
    confirmpassword: "",
  });

  const inputs = [
    {
      id: 1,
      name: "firstname",
      type: "text",
      placeholder: "Firstname",
      label: "Firstname",
      errorMessage:
        "Firstname should be 5-10 and shouldn't include any special character",
      pattern: F_NAME_REGEX,
      required: true,
    },
    {
      id: 2,
      name: "lastname",
      type: "text",
      placeholder: "Lastname",
      label: "Lastname",
      errorMessage:
        "Lastname should be 5-10 and shouldn't include any special character",
      pattern: L_NAME_REGEX,
      required: true,
    },
    {
      id: 3,
      name: "username",
      type: "text",
      placeholder: "Username",
      label: "Username",
      errorMessage:
        "Username should be 5-15 and shouldn't include any special character",
      pattern: U_NAME_REGEX,
      required: true,
    },
    {
      id: 4,
      name: "email",
      type: "email",
      placeholder: "Email",
      label: "Email",
      errorMessage: "It should be a valid email address",
      pattern: EMAIL_REGEX,
      required: true,
    },
    {
      id: 5,
      name: "dob",
      type: "date",
      placeholder: "Date of birth",
      label: "Date Of Birth",
    },
    {
      id: 6,
      name: "password",
      type: "password",
      placeholder: "Password",
      label: "Password",
      errorMessage:
        "Password should be 8-20 characters and include atleast 1 letter, 1 number  and 1 special character ",
      pattern: PASSWORD_REGEX,
      required: true,
    },
    {
      id: 7,
      name: "confirmpassword",
      type: "password",
      placeholder: "Confirm Password",
      label: "Confirm Password",
      errorMessage: "Password don't match!",
      pattern: values.password,
      required: true,
    },
  ];

  const onChange = (e) => {
    setValues({
      ...values,
      [e.target.name]: e.target.value,
    });
  };

  const postData = () => {
    let data = values;
    axios.post(baseURL, data).then(() => {
      navigate("/read");
    });
    console.table(data);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    postData();
    console.table(values);
  };

  return (
    <div className="container-fluid">
      <form className="create-form card p-5 m-5" onSubmit={handleSubmit}>
        {inputs.map((input) => (
          <FormInputs
            key={input.id}
            {...input}
            value={values[input.name]}
            onChange={onChange}
          />
        ))}
        <div className="text-center">
          <button className="btn btn-primary w-25" type="submit">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}
