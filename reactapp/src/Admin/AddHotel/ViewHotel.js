import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import axios from 'axios';
import { getSingleHotel } from '../../service/hotelService';

export default function ViewHotel() {

    const [hotel, setHotel] = useState({
        hotelName: "",
        hotelAddress: "",
        hotelLocation: "",
        hotelEmail: "",
        hotelContactNumber: "",
        hotelManager: "",
        totalRooms: "",
        image1: "",
        image2: ""
    });

    const { id } = useParams();

    useEffect(() => {
        loadHotel();
    }, []);

    const loadHotel = async () => {
        const result = await getSingleHotel(id)
        setHotel(result);
    }

    return (
        <div className='container'>
            <div className='row'>
                <div className='col-md-6 offset-md-3 border rounded p-4 mt-2 shadow'>
                    <h2 className='text-center m-4'>Hotel Details</h2>
                    <div className='card'>
                        <div className='card-header'>
                            Details of user id: {hotel.id}
                            <ul className='list-group list-group-flush'>
                                <li className='list-group-item'>
                                    <b>Hotel Name: </b>
                                    {hotel.hotelName}

                                </li>
                                <li className='list-group-item'>
                                    <b>Hotel Address: </b>
                                    {hotel.hotelAddress}
                                </li>
                                <li className='list-group-item'>
                                    <b>Hotel Location: </b>
                                    {hotel.hotelLocation}
                                </li>
                                <li className='list-group-item'>
                                    <b>Hotel Email: </b>
                                    {hotel.hotelEmail}
                                </li>
                                <li className='list-group-item'>
                                    <b>Hotel Contact: </b>
                                    {hotel.hotelContactNumber}
                                </li>
                                <li className='list-group-item'>
                                    <b>Hotel Manager: </b>
                                    {hotel.hotelManager}
                                </li>
                                <li className='list-group-item'>
                                    <b>Total Rooms: </b>
                                    {hotel.totalRooms}
                                </li>
                                <li className='list-group-item'>
                                    <b>Image 1: </b>
                                    <img src={hotel.image1} alt="Hotel" width="50" height="50" />
                                </li>
                                <li className='list-group-item'>
                                    <b>Image2: </b>
                                    <img src={hotel.image2} alt="Hotel" width="50" height="50" />
                                </li>
                            </ul>
                        </div>
                    </div>
                    <Link className='btn btn-primary my-2' to={'/all-hotels'}>Back</Link>
                </div>
            </div>
        </div>
    );
}
