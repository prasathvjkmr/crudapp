import React from "react";
import useForm from "./useForm";

const SignUp = (submitForm) => {
  const { changeHandler, submitHandler, values, errors } = useForm(submitForm);

  return (
    <>
      <form onSubmit={submitHandler}>
        <label>First Name: </label>
        <input
          type="text"
          name="firstname"
          value={values.firstname}
          onChange={changeHandler}
        />
        {errors.firstname && <p> {errors.firstname} </p>}
        <br />
        <br />
        <label>Last Name: </label>
        <input
          type="text"
          name="lastname"
          value={values.lastname}
          onChange={changeHandler}
        />
        {errors.lastname && <p> {errors.lastname} </p>}
        <br />
        <br />
        <label>Username: </label>
        <input
          type="text"
          name="username"
          value={values.username}
          onChange={changeHandler}
        />
        {errors.username && <p> {errors.username} </p>}
        <br />
        <br />
        <label>Email: </label>
        <input
          type="email"
          name="email"
          value={values.email}
          onChange={changeHandler}
        />
        {errors.email && <p> {errors.email} </p>}
        <br />
        <br />
        <label>Date of birth: </label>
        <input
          type="date"
          name="dob"
          value={values.dob}
          onChange={changeHandler}
        />
        {errors.dob && <p> {errors.dob} </p>}
        <br />
        <br />
        <label>Password: </label>
        <input
          type="password"
          name="password"
          value={values.password}
          onChange={changeHandler}
        />
        {errors.password && <p> {errors.password} </p>}
        <br />
        <br />
        <label>Confirm Password: </label>
        <input
          type="password"
          name="confirmpassword"
          value={values.confirmpassword}
          onChange={changeHandler}
        />
        {errors.confirmpassword && <p> {errors.confirmpassword} </p>}
        <br />
        <br />
        <button type="submit">Submit</button>
      </form>
    </>
  );
};

export default SignUp;
