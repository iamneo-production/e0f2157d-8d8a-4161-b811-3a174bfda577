import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { getSinglePayment } from "../service/paymentService";

export default function ViewPayment() {
    const [payment, setPayment] = useState(null);

    const { id } = useParams(); // Extract the id from URL params

    useEffect(() => {
        loadPayment();
    }, []);

    const loadPayment = async () => {
        try {
            const result = await getSinglePayment(id); // Pass the id to the getSinglePayment function
            setPayment(result);
            console.log(result);
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <div className="container">
            <div className="row">
                <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
                    <h2 className="text-center m-4">Payment Details</h2>
                    {payment ? (
                        <>
                            <p>Email: {payment.email}</p>
                            <p>Phone Number: {payment.phoneNumber}</p>
                            <p>Hotel ID: {payment.hotelId}</p>
                            <p>Amount: {payment.amount}</p>
                        </>
                    ) : (
                        <p>Loading payment details...</p>
                    )}

                    <Link className="btn btn-primary my-2" to={"/all-payments"}>
                        Back
                    </Link>
                </div>
            </div>
        </div>
    );
}
