import React, { useState, useEffect } from 'react';
import { loadScript, createOptions } from './razorPayUtils';

const RazorpayButton = (props) => {
    const [scriptLoaded, setScriptLoaded] = useState(false);

    useEffect(() => {
        loadScript('https://checkout.razorpay.com/v1/checkout.js', () => {
            setScriptLoaded(true);
        });
    }, []);

    const handleClick = async () => {
        if (scriptLoaded) {
            const { amount, currency, onSuccess, onFailure } = props;
            const options = createOptions(amount, currency);
            const rzp = new window.Razorpay(options);
            rzp.on('payment.success', onSuccess);
            rzp.on('payment.error', onFailure);
            rzp.open();
        }
    };

    return (
        <button onClick={handleClick}>
            Pay
        </button>
    );
};

export default RazorpayButton;
