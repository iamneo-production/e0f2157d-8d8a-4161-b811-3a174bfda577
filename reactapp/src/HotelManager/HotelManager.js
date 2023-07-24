import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { getAllBookings, updateBookingStatus } from '../service/bookingService';

const HotelManager = () => {
  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    fetchBookings();
  }, []);

  const fetchBookings = async () => {
    try {
      const response = await getAllBookings()
      setBookings(response);
    } catch (error) {
      console.log(error);
    }
  };

  const handleStatusChange = async (bookingId, status) => {
    try {
      await updateBookingStatus(bookingId, status)
      const updatedBookings = bookings.map((booking) => {
        if (booking.id === bookingId) {
          return { ...booking, bookingStatus: status };
        }
        return booking;
      });
      setBookings(updatedBookings);
    } catch (error) {
      console.log(error);
    }
  };



  const getStatusColor = (status) => {
    switch (status) {
      case 'Approved':
        return 'green';
      case 'Canceled':
        return 'red';
      case 'Pending':
        return 'orange';
      default:
        return 'black';
    }
  };

  return (
    <div className="container-fluid" style={{ height: "100vh" }}>
      <div className="py-2 d-flex flex-column justify-content-center align-items-center">
        <div className="text-center">
          <h2>Customer Bookings</h2>
        </div>
        <table className="my-2 mx-auto table border shadow">
          <thead className="table-dark">
            <tr>

              <th scope="col">Customer Name</th>
              <th scope="col">Customer Contact</th>
              <th scope="col">From</th>
              <th scope="col">To</th>

              <th scope="col">Total Day</th>
              <th scope="col">Total Amount</th>
              <th scope="col">Booking Status</th>
              <th scope="col">Update Booking Status</th>
            </tr>
          </thead>
          <tbody>
            {bookings.map((booking) => (
              <tr key={booking.id}>


                <td>{booking.customerName}</td>
                <td>{booking.customerContact}</td>
                <td>{booking.fromDate}</td>
                <td>{booking.toDate}</td>
                <td>{booking.totalDay}</td>
                <td>{booking.totalAmount}</td>
                <td>
                  <span style={{ color: getStatusColor(booking.bookingStatus) }}>
                    {booking.bookingStatus}
                  </span>
                </td>
                <td>
                  <select
                    value={booking.bookingStatus}
                    onChange={(e) => handleStatusChange(booking.id, e.target.value)}
                  >
                    <option value="Approved">Approved</option>
                    <option value="Canceled">Canceled</option>
                    <option value="Pending">Pending</option>
                  </select>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default HotelManager;
