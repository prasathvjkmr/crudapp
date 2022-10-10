const Validation = (values) => {
  let errors = {};

  if (!values.firstname) {
    errors.firstname = "First Name is required.";
  }
  if (!values.lastname) {
    errors.lastname = "Last Name is required.";
  }
  if (!values.username) {
    errors.username = "Username is required.";
  }
  if (!values.email) {
    errors.email = "Email is required.";
  } else if (!/\S+@\S+\.\S+/.test(values.email)) {
    errors.email = "Eamil is invalid.";
  }
  if (!values.dob) {
    errors.dob = "Date of birth is required.";
  }
  if (!values.password) {
    errors.password = "Password is required.";
  } else if (values.password.length < 5) {
    errors.password = "Password must be more than five characters.";
  } else if (values.password.length > 12) {
    errors.password = "Password must be less than twelve characters.";
  }
  if (!values.confirmpassword) {
    errors.confirmpassword = "Confirm Password is required.";
  } else if (values.confirmpassword !== values.password) {
    errors.confirmpassword = "Password is not matched.";
  }
  return errors;
};

export default Validation;
