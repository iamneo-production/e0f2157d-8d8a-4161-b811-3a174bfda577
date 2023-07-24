import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import AdminNavbar from './AdminNavbar';
import { getAllBookings } from '../service/bookingService';
import { AuthContext } from '../context/AuthContext';

const AdminHomePage = () => {
  const { user } = useContext(AuthContext)
  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    console.log(user)
    fetchBookings();
  }, []);

  const fetchBookings = async () => {
    try {
      if (user.isAdmin) {

        const response = await getAllBookings();
        setBookings(response);
      }
      else {
        console.log("You are not admin from AdminHomePage.js")
      }
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
    <div>
      <AdminNavbar />
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
              </tr>
            </thead>
            <tbody>
              {bookings?.map((booking) => (
                <tr key={booking.bookingId}>


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
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default AdminHomePage;
