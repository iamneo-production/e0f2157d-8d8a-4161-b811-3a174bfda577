import React, { useState, useEffect } from 'react';
import axios from "axios";
import { Link, useParams } from "react-router-dom";
import AdminNavbar from "../AdminNavbar";
import { deleteHotel, getAllHotels } from '../../service/hotelService';

export default function AddHotelHomePage() {

    const [hotels, setHotels] = useState([]);

    const { id } = useParams();

    useEffect(() => {
        loadHotels();
    }, []);

    const loadHotels = async () => {
        const result = await getAllHotels()
        setHotels(result);
    };

    const deleteHotels = async (id) => {
        await deleteHotel(id)
        loadHotels();
    }
    return (
        <div>
            <AdminNavbar />
            <div className="container-fluid" style={{ height: "100vh" }}>
                <div className="py-2 d-flex flex-column justify-content-center align-items-center">
                    <div className="text-center">
                        <Link className="btn btn-dark mx-2" to="/add-hotel">Add New Hotel</Link>
                    </div>
                    <table className="my-2 mx-auto table border shadow">
                        <thead className="table-dark">
                            <tr>
                                <th scope="col">S.No</th>
                                <th scope="col">Hotel Name</th>
                                <th scope="col">Hotel Address</th>
                                <th scope="col">Hotel Location</th>
                                <th scope="col">Hotel Email</th>
                                <th scope="col">Hotel Contact Number</th>
                                <th scope="col">Hotel Manager</th>
                                <th scope="col">Total Rooms</th>
                                <th scope="col">Image 1</th>
                                <th scope="col">Image 2</th>
                                <th scope="col">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                hotels.map((hotel, index) => (
                                    <tr>
                                        <th scope="row" key={index}>{index + 1}</th>
                                        <td>{hotel.hotelName}</td>
                                        <td>{hotel.hotelAddress}</td>
                                        <td>{hotel.hotelLocation}</td>
                                        <td>{hotel.hotelEmail}</td>
                                        <td>{hotel.hotelContactNumber}</td>
                                        <td>{hotel.hotelManager}</td>
                                        <td>{hotel.totalRooms}</td>
                                        <td><img src={hotel.image1} alt="Hotel" width="50" height="50" /></td>
                                        <td><img src={hotel.image2} alt="Hotel" width="50" height="50" /></td>
                                        <td>
                                            <div className="d-flex">
                                                <Link className='btn btn-primary mx-2'
                                                    to={`/view-hotel/${hotel.id}`}>View</Link>
                                                <Link className='btn btn-outline-secondary mx-2'
                                                    to={`/edit-hotel/${hotel.id}`}>Edit</Link>
                                                <button className='btn btn-danger mx-2'
                                                    onClick={() => deleteHotels(hotel.id)}>Delete</button>
                                            </div>
                                        </td>
                                    </tr>
                                ))
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}
