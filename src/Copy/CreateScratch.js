import axios from "axios";
import React, { useState } from "react";
import baseURL from "../APIs/Crud";
import { useNavigate } from "react-router-dom";

export default function Create() {
  let navigate = useNavigate();
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  console.log(firstName);

  const postData = (e) => {
    e.preventDefault();
    let data = { firstname: firstName, lastname: lastName };
    axios.post(baseURL, data).then(() => {
      navigate("/read");
    });
    console.table(data);
  };

  return (
    <div className="container-fluid">
      <form className="create-form">
        <div className="mb-3">
          <label className="form-label">First Name</label>
          <input
            className="form-control"
            placeholder="First Name"
            type="text"
            onChange={(e) => setFirstName(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Last Name</label>
          <input
            className="form-control"
            placeholder="Last Name"
            type="text"
            onChange={(e) => setLastName(e.target.value)}
          />
        </div>
        <div>
          <button className="btn btn-primary" onClick={postData} type="submit">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}
