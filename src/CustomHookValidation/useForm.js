import axios from "axios";
import { useState, useEffect } from "react";
import baseURL from "../APIs/Crud";
import Validation from "./Validation";

const useForm = (submitForm) => {
  const initialval = {
    firstname: "",
    lastname: "",
    username: "",
    email: "",
    dob: "",
    password: "",
    confirmpassword: "",
  };

  const [errors, setErrors] = useState({});

  const [values, setValues] = useState(initialval);

  const [dataIsCorrect, setDataIsCorrect] = useState(false);

  const changeHandler = (e) => {
    setValues({
      ...values,
      [e.target.name]: e.target.value,
    });
    // console.log(values);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    setErrors(Validation(values));
    setDataIsCorrect(true);
    // console.log(values);
  };

  const postData = (e) => {
    let data = values;
    axios.post(baseURL, data).then(() => {
      console.table(values);
    });
  };

  useEffect(() => {
    if (Object.keys(errors).length === 0 && dataIsCorrect) {
      submitForm(true);
      // console.log(values);
      postData();
    }
  }, [errors]);

  return { changeHandler, submitHandler, values, errors };
};

export default useForm;
