import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";
import AdminNavbar from "../AdminNavbar";
import { deleteRoom, getAllRooms } from "../../service/roomService";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
export default function AddRoomHomePage() {
  const [rooms, setRooms] = useState([]);
  const { user } = useContext(AuthContext)
  console.log(user)

  const { id } = useParams();

  useEffect(() => {
    loadRooms();
  }, []);

  const loadRooms = async () => {
    const result = await getAllRooms()
    setRooms(result);
    console.log(result)
  };

  const deleteSingleRoom = async (id) => {
    await deleteRoom(id)
    loadRooms();
  };

  return (
    <div>
      <AdminNavbar />
      <div className="container-fluid" style={{ height: "100vh" }}>
        <div className="py-2 d-flex flex-column justify-content-center align-items-center">
          <div className="text-center">
            <Link className="btn btn-dark mx-2" to="/add-room">
              Add New Room
            </Link>
          </div>
          <table className="my-2 mx-auto table border shadow">
            <thead className="table-dark">
              <tr>
                <th scope="col">S.No</th>
                <th scope="col">Hotel Name</th>
                <th scope="col">Image</th>
                <th scope="col">Address</th>
                <th scope="col">Room Type</th>
                <th scope="col">Rating</th>
                <th scope="col">Cost</th>
                <th scope="col">Location</th>
                <th scope="col">Action</th>
              </tr>
            </thead>
            <tbody>
              {rooms?.map((room, index) => (
                <tr key={index}>
                  <th scope="row">{index + 1}</th>
                  <td>{room.title}</td>
                  <td>
                    <img src={room.image} alt="Hotel" width="50" height="50" />
                  </td>
                  <td>{room.address}</td>
                  <td>{room.roomType}</td>
                  <td>{room.rating}</td>
                  <td>{room.cost}</td>
                  <td>{room.location}</td>
                  <td>
                    <div className="d-flex">
                      <Link
                        className="btn btn-primary mx-2"
                        to={`/view-room/${room.id}`}
                      >
                        View
                      </Link>
                      <Link
                        className="btn btn-outline-secondary mx-2"
                        to={`/edit-room/${room.id}`}
                      >
                        Edit
                      </Link>
                      {
                        user.isAdmin && (<button
                          className="btn btn-danger mx-2"
                          onClick={() => deleteSingleRoom(room.id)}
                        >
                          Delete
                        </button>)
                      }

                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
