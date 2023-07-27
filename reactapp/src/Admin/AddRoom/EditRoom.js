import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { getSingleRoom, updateRoom } from "../../service/roomService";

export default function EditRoom() {
  let navigate = useNavigate();
  const { id } = useParams();

  const [room, setRoom] = useState({
    title: "",
    image: "",
    address: "",
    roomType: "",
    rating: "",
    cost: "",
    location: "",
  });

  const { title, image, address, roomType, rating, cost, location } = room;

  const onInputChange = (e) => {
    setRoom({ ...room, [e.target.name]: e.target.value });
  };

  useEffect(() => {
    loadRoom();
  }, []);

  const onSubmit = async (e) => {
    e.preventDefault();
    await updateRoom(id, room)
    navigate("/all-rooms");
  };

  const loadRoom = async () => {
    const result = await getSingleRoom(id)
    setRoom(result);
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
          <h2 className="text-center m-4">Edit Room Details</h2>
          <form onSubmit={onSubmit}>
            <div className="mb-3">
              <label htmlFor="Title" className="form-label">
                Hotel Name
              </label>
              <input
                type="text"
                className="form-control"
                placeholder="Enter Title"
                name="title"
                value={title}
                onChange={onInputChange}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="Image" className="form-label">
                Image
              </label>
              <input
                type="text"
                className="form-control"
                placeholder="URL"
                name="image"
                value={image}
                onChange={onInputChange}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="Address" className="form-label">
                Address
              </label>
              <input
                type="text"
                className="form-control"
                placeholder="Enter Address"
                name="address"
                value={address}
                onChange={onInputChange}
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
                <option value='' selected disabled>Room Type</option>
                <option>Single Room</option>
                <option>Double Room</option>
                <option>Deluxe Room</option>
                <option>Twin Room</option>
                <option>Suite Room</option>
              </select>
            </div>
            <div className="mb-3">
              <label htmlFor="Rating" className="form-label">
                Rating
              </label>
              <input
                type="text"
                className="form-control"
                placeholder="Enter Rating"
                name="rating"
                value={rating}
                onChange={onInputChange}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="Cost" className="form-label">
                Cost
              </label>
              <input
                type="text"
                className="form-control"
                placeholder="Enter Cost"
                name="cost"
                value={cost}
                onChange={onInputChange}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="Location" className="form-label">
                Location
              </label>
              <input
                type="text"
                className="form-control"
                placeholder="Enter Location"
                name="location"
                value={location}
                onChange={onInputChange}
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
