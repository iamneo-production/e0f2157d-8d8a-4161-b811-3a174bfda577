import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";
import AdminNavbar from "../AdminNavbar";
import { deleteManager, getAllManagers } from "../../service/managerService";

export default function AddManagerHomePage() {
  const [managers, setManagers] = useState([]);
  const { id } = useParams();
  useEffect(() => {
    loadManagers();
  }, []);

  const loadManagers = async () => {
    const result = await getAllManagers()
    setManagers(result);
  };

  const deleteManagers = async (id) => {
    await deleteManager(id)
    loadManagers();
  };

  return (
    <div>
      <AdminNavbar />
      <div className="container">
        <div className="py-2">
          <div className="text-center">
            <Link className="btn btn-dark mx-2" to="/add-manager">Add New Manager</Link>
          </div>
          <table className="my-2 table border shadow">
            <thead className="table-dark">
              <tr>
                <th scope="col">S.No</th>
                <th scope="col">First Name</th>
                <th scope="col">Last Name</th>
                <th scope="col">Gender</th>
                <th scope="col">Age</th>
                <th scope="col">Contact Number</th>
                <th scope="col">Email Id</th>
                <th scope="col">Address</th>
                <th scope="col">Action</th>
              </tr>
            </thead>
            <tbody>
              {managers.map((manager, index) => (
                <tr>
                  <th scope="row" key={index}>
                    {index + 1}
                  </th>
                  <td>{manager.firstName}</td>
                  <td>{manager.lastName}</td>
                  <td>{manager.gender}</td>
                  <td>{manager.age}</td>
                  <td>{manager.contactNumber}</td>
                  <td>{manager.managerEmailId}</td>
                  <td>{manager.address}</td>
                  <td>
                    <Link
                      className="btn btn-primary mx-2"
                      to={`/view-manager/${manager.id}`}
                    >
                      View
                    </Link>
                    <Link
                      className="btn btn-outline-secondary mx-2"
                      to={`/edit-manager/${manager.id}`}
                    >
                      Edit
                    </Link>
                    <button
                      className="btn btn-danger mx-2"
                      onClick={() => deleteManagers(manager.id)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}
