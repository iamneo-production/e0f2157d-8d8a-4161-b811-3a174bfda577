import axios from "axios";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { saveRoom } from "../../service/roomService";

export default function AddRoom() {
  let navigate = useNavigate();

  const [room, setRoom] = useState({
    title: "",
    image: "",
    address: "",
    roomType: "",
    rating: "",
    cost: "",
    location: "",
  });

  const { title,
    image,
    address,
    roomType,
    rating,
    cost,
    location } = room;

  const onInputChange = (e) => {
    setRoom({ ...room, [e.target.name]: e.target.value });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    await saveRoom(room)
    navigate("/all-rooms");
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
          <h2 className="text-center m-4">Register Rooms</h2>

          <form onSubmit={(e) => onSubmit(e)}>
            <div className="mb-3">
              <label htmlFor="Title" className="form-label">
                Title
              </label>
              <input
                type={"text"}
                className="form-control"
                placeholder="Enter Title"
                name="title"
                value={title}
                onChange={(e) => onInputChange(e)}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="Image" className="form-label">
                Image
              </label>
              <input
                type={"text"}
                className="form-control"
                placeholder="url"
                name="image"
                value={image}
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
            <div className="mb-3">
              <label htmlFor="RoomType" className="form-label">
                Room Type
              </label>
              <select
                className="form-control"
                name="roomType"
                value={roomType}
                onChange={(e) => onInputChange(e)}>
                <option value="" disabled>Room Type</option>
                <option value="Single Room">Single Room</option>
                <option value="Double Room">Double Room</option>
                <option value="Deluxe Room">Deluxe Room</option>
                <option value="Twin Room">Twin Room</option>
                <option value="Suite Room">Suite Room</option>
              </select>
            </div>
            <div className="mb-3">
              <label htmlFor="Rating" className="form-label">
                Rating
              </label>
              <input
                type={"text"}
                className="form-control"
                placeholder="Enter rating"
                name="rating"
                value={rating}
                onChange={(e) => onInputChange(e)}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="Cost" className="form-label">
                Cost
              </label>
              <input
                type={"text"}
                className="form-control"
                placeholder="Enter cost"
                name="cost"
                value={cost}
                onChange={(e) => onInputChange(e)}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="Location" className="form-label">
                Location
              </label>
              <input
                type={"text"}
                className="form-control"
                placeholder="Enter location "
                name="location"
                value={location}
                onChange={(e) => onInputChange(e)}
              />
            </div>
            <button type="submit" className="btn btn-outline-success">
              Submit
            </button>
            <Link className="btn btn-outline-danger mx-2" to="/all-rooms">
              Cancel
            </Link>
          </form>
        </div>
      </div>
    </div>
  );
}