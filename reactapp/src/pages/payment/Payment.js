import React, { useState, useContext } from 'react';
import RazorpayButton from './RazorPayButton';
import './payment.css';
import { Link, useLocation } from 'react-router-dom';
import { AuthContext } from '../../context/AuthContext';

const Payment = () => {
    const location = useLocation();
    const { roomAmount, idRoom, bookingData } = location.state;
    const { user } = useContext(AuthContext);
    const [email, setEmail] = useState(user.email);
    const [phoneNumber, setPhoneNumber] = useState(user.phone);
    const [hotelId, setHotelId] = useState(idRoom.id);
    const [amount, setAmount] = useState(roomAmount); 
    const [originalAmount, setOriginalAmount] = useState(roomAmount); 
     

    const handleInputChange = (e) => {
        const { name, value } = e.target;

        switch (name) {
            case 'email':
                setEmail(value);
                break;
            case 'phoneNumber':
                setPhoneNumber(value);
                break;
            case 'hotelId':
                setHotelId(value);
                break;
            case 'amount':
                setAmount(value);
            default:
                break;
        }
    };

    const handlePaymentSuccess = (payment) => {
        console.log("Payment successful:", payment);
      
    };

    const handlePaymentFailure = (error) => {
        console.log('Payment failed:', error);
    
    };


    const handlePaymentOnServer = async (amount) => {
       
        console.log("Sending to server: ",amount);
        
    };

    return (
        <div className="app-container">
            <h1>Payment Details</h1>
            <div className="input-container">
                <label htmlFor="email">Email:</label>
                <input
                    type="email"
                    id="email"
                    name="email"
                    value={email}
                    onChange={handleInputChange}
                    placeholder="Email"
                />
                <label htmlFor="phoneNumber">Phone Number:</label>
                <input
                    type="tel"
                    id="phoneNumber"
                    name="phoneNumber"
                    value={phoneNumber}
                    onChange={handleInputChange}
                    placeholder="Phone Number"
                />
                <label htmlFor="hotelId">Hotel ID:</label>
                <input
                    type="text"
                    id="hotelId"
                    name="hotelId"
                    value={hotelId}
                    onChange={handleInputChange}
                    placeholder="Hotel ID"
                    readOnly
                />
                <label htmlFor="amount">Amount:</label>
                <input
                    type="number"
                    id="amount"
                    name="amount"
                    value={amount}
                    onChange={handleInputChange}
                    placeholder="Amount"
                    readOnly
                />
            </div>
            <div className="amount-display">
                <p>Payment Amount: {amount} INR</p>
            </div>
            <RazorpayButton
                amount={amount * 100} 
                currency="INR"
                email={email}
                phoneNumber={phoneNumber}
                hotelId={hotelId}
                onSuccess={handlePaymentSuccess}
                onFailure={handlePaymentFailure}
                onServerPayment={handlePaymentOnServer} 
                originalAmount = {originalAmount}
            />

            <button><Link to="/home">Go back</Link></button>
            <button><Link to={"/all-payments"}>All Payments</Link></button>
        </div>
    );
};

export default Payment;
