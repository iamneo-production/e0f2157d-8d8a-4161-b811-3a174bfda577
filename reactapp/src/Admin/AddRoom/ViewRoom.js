import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { getSingleRoom } from "../../service/roomService";

export default function ViewRoom() {
  const [room, setRoom] = useState({
    title: "",
    image: "",
    address: "",
    roomType: "",
    rating: "",
    cost: "",
    location: "",
  });

  const { id } = useParams();
  useEffect(() => {
    loadRoom();
  }, []);

  const loadRoom = async () => {
    const result = await getSingleRoom(id)
    setRoom(result);
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
          <h2 className="text-center m-4">Room Details</h2>

          <div className="card">
            <div className="card-header">
              Details of id: {room.id}
              <ul className="list-group list-group-flush">
                <li className="list-group-item">
                  <b>Hotel Name: </b>
                  {room.title}
                </li>
                <li className="list-group-item">
                  <b>Image: </b>
                  <img src={room.image} alt="Hotel" width="50" height="50" />
                </li>
                <li className="list-group-item">
                  <b>Address: </b>
                  {room.address}
                </li>
                <li className="list-group-item">
                  <b>Room Type: </b>
                  {room.roomType}
                </li>
                <li className="list-group-item">
                  <b>Rating: </b>
                  {room.rating}
                </li>
                <li className="list-group-item">
                  <b>Cost: </b>
                  {room.cost}
                </li>
                <li className="list-group-item">
                  <b>Location: </b>
                  {room.location}
                </li>
              </ul>
            </div>
          </div>
          <Link className="btn btn-primary my-2" to={"/all-rooms"}>
            Back
          </Link>
        </div>
      </div>
    </div>
  );
}
