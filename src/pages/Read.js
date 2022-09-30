import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import baseURL from "../APIs/Crud";

export default function Read() {
  const [APIData, setAPIData] = useState([]);

  const getData = () => {
    axios.get(`${baseURL}`).then((getData) => {
      setAPIData(getData.data);
    });
  };

  useEffect(() => {
    getData();
  }, [getData.data]);

  const updateHandler = async (data) => {
    const updateFirstname = prompt("First Name");
    const updateLastname = prompt("Last Name");
    const updateUsername = prompt("User Name");
    const updateEmail = prompt("Email");
    const updateDOB = prompt("DOB");
    const updatePassword = prompt("Password");
    const updateConfirmPassword = prompt("Confirm Password");
    await axios
      .put(`${baseURL}/${data.id}`, {
        firstname: updateFirstname,
        lastname: updateLastname,
        username: updateUsername,
        email: updateEmail,
        dob: updateDOB,
        password: updatePassword,
        confirmpassword: updateConfirmPassword,
      })
      .then((respone) => getData(respone.data));
    alert(`Updated Successfully`);
    console.table({ firstname: updateFirstname, lastname: updateLastname });
  };

  const deleteHandler = (data) => {
    axios.delete(`${baseURL}/${data.id}`).then(() => {
      getData();
      alert(`${data.firstname} ${data.lastname} 
      Deleted Successfully`);
      console.table(data);
    });
  };
  return (
    <div className="container-fluid">
      <table className="table">
        <thead>
          <tr>
            <th>Id</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>User Name</th>
            <th>Email</th>
            <th>DOB</th>
            <th>Password</th>
            <th>Confirm Password</th>
            <th>Update</th>
            <th>Delete</th>
          </tr>
        </thead>

        <tbody>
          {APIData &&
            APIData.map((data) => {
              return (
                <tr key={data.id}>
                  <td>{data.id}.</td>
                  <td>{data.firstname}</td>
                  <td>{data.lastname}</td>
                  <td>{data.username}</td>
                  <td>{data.email}</td>
                  <td>{data.dob}</td>
                  <td>{data.password}</td>
                  <td>{data.confirmpassword}</td>
                  <td>
                    <button className="btn" onClick={() => updateHandler(data)}>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        className="bi bi-pencil-square"
                        viewBox="0 0 16 16"
                      >
                        <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z" />
                        <path
                          fillRule="evenodd"
                          d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z"
                        />
                      </svg>
                    </button>
                  </td>
                  <td>
                    <button className="btn" onClick={() => deleteHandler(data)}>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        className="bi bi-trash-fill"
                        viewBox="0 0 16 16"
                      >
                        <path d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1H2.5zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5zM8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5zm3 .5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 1 0z" />
                      </svg>
                    </button>
                  </td>
                </tr>
              );
            })}
        </tbody>
      </table>
    </div>
  );
}
