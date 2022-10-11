import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import baseURL from "../APIs/Crud";

export default function Read() {
  const [APIData, setAPIData] = useState([]);
  const [updateVal, setUpdateVal] = useState({
    updateId: "",
    updateFirstname: "",
    updateLastname: "",
    updateUsername: "",
    updateEmail: "",
    updateDob: "",
    updatePassword: "",
    updateConfirmPassword: "",
  });

  const getData = () => {
    axios.get(`${baseURL}`).then((getData) => {
      setAPIData(getData.data);
    });
  };

  useEffect(() => {
    getData();
  }, [getData.data]);

  const UpdateHandler = (data) => {
    setUpdateVal({
      updateId: data.id,
      updateFirstname: data.firstname,
      updateLastname: data.lastname,
      updateUsername: data.username,
      updateEmail: data.email,
      updateDob: data.dob,
      updatePassword: data.password,
      updateConfirmPassword: data.confirmpassword,
    });
  };

  const changeHandler = (e) => {
    setUpdateVal({
      ...updateVal,
      [e.target.name]: e.target.value,
    });
  };

  const handleUpdate = (updateVal) => {
    axios
      .put(`${baseURL}/${updateVal.updateId}`, {
        firstname: updateVal.updateFirstname,
        lastname: updateVal.updateLastname,
        username: updateVal.updateUsername,
        email: updateVal.updateEmail,
        dob: updateVal.updateDob,
        password: updateVal.updatePassword,
        confirmpassword: updateVal.updateConfirmPassword,
      })
      .then((response) => getData(response.data));
    alert(`Updated Successfully`);
    console.log(updateVal);
  };

  const deleteHandler = (data) => {
    axios.delete(`${baseURL}/${data.id}`).then(() => {
      getData();
      alert(`${data.firstname} ${data.lastname} 
      Deleted Successfully`);
      console.table(data);
    });
  };

  const [sorting, setSorting] = useState({
    field: "name",
    ascending: false,
  });

  const applysorting = (key, ascending) => {
    setSorting({
      key: key,
      ascending: ascending,
    });
  };

  useEffect(() => {
    const dataCopy = [...APIData];

    const sortedData = dataCopy.sort((a, b) => {
      return a[sorting.key]
        .toString()
        .localeCompare(b[sorting.key].toString(), "en", { numeric: true });
    });

    setAPIData(sorting.ascending ? sortedData : sortedData.reverse());
  }, [sorting]);

  return (
    <div className="container-fluid">
      <table className="table">
        <thead>
          <tr>
            <th>
              <button
                type="button"
                onClick={() => applysorting("id", !sorting.ascending)}
              >
                Id
              </button>
            </th>
            <th>
              <button
                type="button"
                onClick={() => applysorting("firstname", !sorting.ascending)}
              >
                First Name
              </button>
            </th>
            <th>
              <button
                type="button"
                onClick={() => applysorting("lastname", !sorting.ascending)}
              >
                Last Name
              </button>
            </th>
            <th>
              <button
                type="button"
                onClick={() => applysorting("username", !sorting.ascending)}
              >
                User Name
              </button>
            </th>
            <th>
              <button
                type="button"
                onClick={() => applysorting("email", !sorting.ascending)}
              >
                Email
              </button>
            </th>
            <th>
              <button
                type="button"
                onClick={() => applysorting("dob", !sorting.ascending)}
              >
                DOB
              </button>
            </th>
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
                    <button
                      type="button"
                      className="btn"
                      data-bs-toggle="modal"
                      data-bs-target="#update"
                      onClick={() => UpdateHandler(data)}
                    >
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
                    <div
                      className="modal fade"
                      id="update"
                      data-bs-backdrop="static"
                      data-bs-keyboard="false"
                      tabIndex="-1"
                    >
                      <div className="modal-dialog">
                        <div className="modal-content">
                          <div className="modal-header">
                            <h1 className="modal-title fs-5">Update</h1>
                            <button
                              type="button"
                              className="btn-close"
                              data-bs-dismiss="modal"
                            ></button>
                          </div>
                          <div className="modal-body">
                            <label className="form-label">Firstname: </label>
                            <input
                              className="form-control"
                              type="text"
                              name="updateFirstname"
                              value={updateVal.updateFirstname}
                              onChange={changeHandler}
                            />
                            <label className="form-label">Lastname: </label>
                            <input
                              className="form-control"
                              type="text"
                              name="updateLastname"
                              value={updateVal.updateLastname}
                              onChange={changeHandler}
                            />
                            <label className="form-label">Username: </label>
                            <input
                              className="form-control"
                              type="text"
                              name="updateUsername"
                              value={updateVal.updateUsername}
                              onChange={changeHandler}
                            />
                            <label className="form-label">Email: </label>
                            <input
                              className="form-control"
                              type="email"
                              name="updateEmail"
                              value={updateVal.updateEmail}
                              onChange={changeHandler}
                            />
                            <label className="form-label">DOB: </label>
                            <input
                              className="form-control"
                              name="updateDob"
                              value={updateVal.updateDob}
                              onChange={changeHandler}
                            />
                            <label className="form-label">Password: </label>
                            <input
                              className="form-control"
                              type="password"
                              name="updatePassword"
                              value={updateVal.updatePassword}
                              onChange={changeHandler}
                            />
                            <label className="form-label">
                              Confirm Password:{" "}
                            </label>
                            <input
                              className="form-control"
                              type="password"
                              name="updateConfirmPassword"
                              value={updateVal.updateConfirmPassword}
                              onChange={changeHandler}
                            />
                          </div>
                          <div className="modal-footer">
                            <button
                              type="button"
                              className="btn btn-secondary"
                              data-bs-dismiss="modal"
                            >
                              Cancel
                            </button>
                            <button
                              type="button"
                              className="btn btn-success"
                              onClick={() => handleUpdate(updateVal)}
                            >
                              Update
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
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
