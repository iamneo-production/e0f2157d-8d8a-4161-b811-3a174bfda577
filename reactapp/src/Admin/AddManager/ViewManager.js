import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { getSingleManager } from "../../service/managerService";

export default function ViewManager() {
  const [manager, setManager] = useState({
    firstName: "",
    lastName: "",
    gender: "",
    age: "",
    contactNumber: "",
    managerEmailId: "",
    address: "",
  });

  const { id } = useParams();

  useEffect(() => {
    loadManager();
  }, []);

  const loadManager = async () => {
    const result = await getSingleManager(id)
    setManager(result);
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
          <h2 className="text-center m-4">Manager Details</h2>

          <div className="card">
            <div className="card-header">
              Details of id : {manager.id}
              <ul className="list-group list-group-flush">
                <li className="list-group-item">
                  <b>First Name : </b>
                  {manager.firstName}
                </li>
                <li className="list-group-item">
                  <b>Last Name : </b>
                  {manager.lastName}
                </li>
                <li className="list-group-item">
                  <b>Gender : </b>
                  {manager.gender}
                </li>
                <li className="list-group-item">
                  <b>Age : </b>
                  {manager.age}
                </li>
                <li className="list-group-item">
                  <b>Contact Number : </b>
                  {manager.contactNumber}
                </li>
                <li className="list-group-item">
                  <b>Email Id : </b>
                  {manager.managerEmailId}
                </li>
                <li className="list-group-item">
                  <b>Address : </b>
                  {manager.address}
                </li>
              </ul>
            </div>
          </div>
          <Link className="btn btn-primary my-2" to={"/all-managers"}>
            Back
          </Link>
        </div>
      </div>
    </div>
  );
}