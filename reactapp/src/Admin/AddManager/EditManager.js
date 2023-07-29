import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { getSingleManager, updateManager } from "../../service/managerService";

export default function EditManager() {
  let navigate = useNavigate();

  const { id } = useParams();

  const [manager, setManager] = useState({
    firstName: "",
    lastName: "",
    gender: "",
    age: "",
    contactNumber: "",
    managerEmailId: "",
    address: "",
  });

  const { firstName, lastName, gender, age, contactNumber, managerEmailId, address } = manager;

  const onInputChange = (e) => {
    setManager({ ...manager, [e.target.name]: e.target.value });
  };

  useEffect(() => {
    loadManager();
  }, []);

  const onSubmit = async (e) => {
    e.preventDefault();
    await updateManager(id, manager)
    navigate("/all-managers");
  };

  const loadManager = async () => {
    const result = await getSingleManager(id)
    setManager(result);
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
          <h2 className="text-center m-4">Edit Manager Details</h2>

          <form onSubmit={(e) => onSubmit(e)}>
            <div className="mb-3">
              <label htmlFor="Firstame" className="form-label">
                First Name
              </label>
              <input
                type={"text"}
                className="form-control"
                placeholder="Enter your name"
                name="firstName"
                value={firstName}
                onChange={(e) => onInputChange(e)}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="Lastname" className="form-label">
                Last Name
              </label>
              <input
                type={"text"}
                className="form-control"
                placeholder="Enter your username"
                name="lastName"
                value={lastName}
                onChange={(e) => onInputChange(e)}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="Gender" className="form-label">
                Gender
              </label>
              <select
                className="form-control"
                name="gender"
                value={gender}
                onChange={(e) => onInputChange(e)}>
                <option value='' selected disabled>Select Gender</option>
                <option>Female</option>
                <option>Male</option>
                <option>Other</option>
              </select>
            </div>
            <div className="mb-3">
              <label htmlFor="Age" className="form-label">
                Age
              </label>
              <input
                type={"number"}
                className="form-control"
                placeholder="Enter age"
                name="age"
                value={age}
                onChange={(e) => onInputChange(e)}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="Contactnumber" className="form-label">
                Contact Number
              </label>
              <input
                type={"tel"}
                className="form-control"
                placeholder="Enter contact"
                name="contactNumber"
                value={contactNumber}
                onChange={(e) => onInputChange(e)}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="Manageremailid" className="form-label">
                Email Id
              </label>
              <input
                type={"email"}
                className="form-control"
                placeholder="Enter e-mail address"
                name="managerEmailId"
                value={managerEmailId}
                onChange={(e) => onInputChange(e)}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="Address" className="form-label">
                Address
              </label>
              <input
                type={"text"}
                className="form-control"
                placeholder="Enter address"
                name="address"
                value={address}
                onChange={(e) => onInputChange(e)}
              />
            </div>
            <button type="submit" className="btn btn-outline-success">
              Submit
            </button>
            <Link className="btn btn-outline-danger mx-2" to="/all-managers">
              Cancel
            </Link>
          </form>
        </div>
      </div>
    </div>
  );
}