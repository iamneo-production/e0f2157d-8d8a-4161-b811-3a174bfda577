import React, { useState, useEffect } from 'react';
import { loadScript, createOptions } from './razorPayUtils';
import { addPayment } from '../../service/paymentService';

const RazorpayButton = (props) => {
    const [scriptLoaded, setScriptLoaded] = useState(false);
    const {amount,currency, onSuccess, onFailure, email, hotelId, phoneNumber ,originalAmount} = props;
    
    
    

    useEffect(() => {
        loadScript('https://checkout.razorpay.com/v1/checkout.js', () => {
            setScriptLoaded(true);
        });
    }, []);

    const handleClick = async () => {
        if (scriptLoaded) {
            const options = createOptions(amount, currency); 
            const rzp = new window.Razorpay(options);
            rzp.on('payment.success', onSuccess);
            rzp.on('payment.error', onFailure);
            rzp.open();
        }
        
        const response = await addPayment({ email, phoneNumber, hotelId, amount : Number(originalAmount) });
        console.log(response);
    };

    return (
        <button onClick={handleClick}>
            Pay
        </button>
    );
};

export default RazorpayButton;
