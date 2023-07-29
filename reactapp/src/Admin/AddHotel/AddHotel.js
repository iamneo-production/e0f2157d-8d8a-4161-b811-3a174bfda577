import React, { useContext, useState } from 'react';
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { addHotel } from '../../service/hotelService';
import { AuthContext } from '../../context/AuthContext';


export default function AddHotel() {
    const { user } = useContext(AuthContext)
    let navigate = useNavigate();
    const [hotel, setHotel] = useState({
        hotelName: "",
        hotelAddress: "",
        hotelLocation: "",
        hotelManagerName: "",
        totalRooms: "",
        hotelEmail: "",
        hotelContact: "",
        image1: "",
        image2: "",
    });
    const {
        hotelName, hotelAddress, hotelLocation, hotelManager, totalRooms,
        hotelEmail, hotelContactNumber, image1, image2
    } = hotel;
    const onInputChange = (e) => {
        setHotel({ ...hotel, [e.target.name]: e.target.value });
    };

    const onSubmit = async (e) => {

        e.preventDefault();
        if (user.isAdmin) {

            await addHotel(hotel)
            navigate("/all-hotels");
        }
        else {
            navigate("/home")
        }
    };
    return (
        <div className='container'>
            <div className='row'>
                <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
                    <h2 className="text-center m-4">Register New Hotel</h2>
                    <form onSubmit={(e) => onSubmit(e)}>
                        <div className='mb-3'>
                            <label htmlFor='HotelName' className='form-label'>Name</label>
                            <input
                                type={'text'}
                                className='form-control'
                                placeholder='Enter Name'
                                name='hotelName'
                                value={hotelName}
                                onChange={(e) => onInputChange(e)}
                            />
                        </div>
                        <div className='mb-3'>
                            <label htmlFor='HotelAddress' className='form-label'>Hotel Address</label>
                            <textarea
                                className='form-control'
                                rows='2'
                                placeholder='Address'
                                name='hotelAddress'
                                value={hotelAddress}
                                onChange={(e) => onInputChange(e)}
                            />
                        </div>
                        <div className='mb-3'>
                            <label htmlFor='HotelLocation' className='form-label'>Hotel Location</label>
                            <input
                                type={'text'}
                                className='form-control'
                                placeholder='Enter Location'
                                name='hotelLocation'
                                value={hotelLocation}
                                onChange={(e) => onInputChange(e)}
                            />
                        </div>
                        <div className='mb-3'>
                            <label htmlFor='HotelEmail' className='form-label'>Hotel Email</label>
                            <input
                                type={'email'}
                                className='form-control'
                                placeholder='Enter Email'
                                name='hotelEmail'
                                value={hotelEmail}
                                onChange={(e) => onInputChange(e)}
                            />
                        </div>
                        <div className='mb-3'>
                            <label htmlFor='HotelContactNumber' className='form-label'>Hotel Contact Number</label>
                            <input
                                type={'tel'}
                                className='form-control'
                                placeholder='Enter contact'
                                name='hotelContactNumber'
                                value={hotelContactNumber}
                                onChange={(e) => onInputChange(e)}
                            />
                        </div>
                        <div className='mb-3'>
                            <label htmlFor='HotelManager' className='form-label'>Hotel Manager</label>
                            <input
                                type={'text'}
                                className='form-control'
                                placeholder='Enter Manager Name'
                                name='hotelManager'
                                value={hotelManager}
                                onChange={(e) => onInputChange(e)}
                            />
                        </div>
                        <div className='mb-3'>
                            <label htmlFor='TotalRooms' className='form-label'>Total Rooms</label>
                            <input
                                type={'number'}
                                className='form-control'
                                placeholder='Enter no.of rooms'
                                name='totalRooms'
                                value={totalRooms}
                                onChange={(e) => onInputChange(e)}
                            />
                        </div>
                        <div className='mb-3'>
                            <label htmlFor='Image1' className='form-label'>Image 1</label>
                            <input
                                type={'text'}
                                className='form-control'
                                placeholder='Add Image'
                                name='image1'
                                value={image1}
                                onChange={(e) => onInputChange(e)}
                            />
                        </div>
                        <div className='mb-3'>
                            <label htmlFor='Image2' className='form-label'>Image 2</label>
                            <input
                                type={'text'}
                                className='form-control'
                                placeholder='Add File'
                                name='image2'
                                value={image2}
                                onChange={(e) => onInputChange(e)}
                            />
                        </div>
                        <button type="submit" className="btn btn-outline-success">Submit</button>
                        <Link className="btn btn-outline-danger mx-2" to="/all-hotels">Cancel</Link>
                    </form>
                </div>
            </div >
        </div>
    )
}