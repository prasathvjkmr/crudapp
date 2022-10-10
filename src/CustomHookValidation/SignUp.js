import React from "react";
import useForm from "./useForm";

// eslint-disable-next-line react/prop-types
const SignUp = ({ submitForm }) => {
  const { changeHandler, submitHandler, values, errors } = useForm(submitForm);

  return (
    <>
      <form className="container my-3" onSubmit={submitHandler}>
        <div className="mb-3 row">
          <label className="col-2 col-form-label">First Name: </label>
          <div className="col-10">
            <input
              className="form-control"
              type="text"
              name="firstname"
              value={values.firstname}
              onChange={changeHandler}
            />
            {errors.firstname && <p> {errors.firstname} </p>}
          </div>
        </div>
        <div className="mb-3 row">
          <label className="col-2 col-form-lable">Last Name: </label>
          <div className="col-10">
            <input
              className="form-control"
              type="text"
              name="lastname"
              value={values.lastname}
              onChange={changeHandler}
            />
            {errors.lastname && <p> {errors.lastname} </p>}
          </div>
        </div>
        <div className="mb-3 row">
          <label className="col-2 col-form-label">Username: </label>
          <div className="col-10">
            <input
              className="form-control"
              type="text"
              name="username"
              value={values.username}
              onChange={changeHandler}
            />
            {errors.username && <p> {errors.username} </p>}
          </div>
        </div>
        <div className="mb-3 row">
          <label className="col-2 col-form-label">Email: </label>
          <div className="col-10">
            <input
              className="form-control"
              type="email"
              name="email"
              value={values.email}
              onChange={changeHandler}
            />
            {errors.email && <p> {errors.email} </p>}
          </div>
        </div>
        <div className="mb-3 row">
          <label className="col-2 col-form-label">Date of birth: </label>
          <div className="col-10">
            <input
              className="form-control"
              type="date"
              name="dob"
              value={values.dob}
              onChange={changeHandler}
            />
            {errors.dob && <p> {errors.dob} </p>}
          </div>
        </div>
        <div className="mb-3 row">
          <label className="col-2 col-form-label">Password: </label>
          <div className="col-10">
            <input
              className="form-control"
              type="password"
              name="password"
              value={values.password}
              onChange={changeHandler}
            />
            {errors.password && <p> {errors.password} </p>}
          </div>
        </div>
        <div className="mb-3 row">
          <label className="col-2 col-form-label">Confirm Password: </label>
          <div className="col-10">
            <input
              className="form-control"
              type="password"
              name="confirmpassword"
              value={values.confirmpassword}
              onChange={changeHandler}
            />
            {errors.confirmpassword && <p> {errors.confirmpassword} </p>}
          </div>
        </div>
        <div className="text-center">
          <button className="col-2 btn btn-primary" type="submit">
            Submit
          </button>
        </div>
      </form>
    </>
  );
};

export default SignUp;
