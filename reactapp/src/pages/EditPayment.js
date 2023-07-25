import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { getSinglePayment, updatePayment } from "../service/paymentService";

export default function EditPayment() {
    let navigate = useNavigate();
    const { id } = useParams();

    const [payment, setPayment] = useState({
        email: "",
        phoneNumber: "",
        hotelId: "",
        amount: ""
    });

    const { email, amount, phoneNumber, hotelId } = payment;

    const onInputChange = (e) => {
        setPayment({ ...payment, [e.target.name]: e.target.value });
    };

    useEffect(() => {
        loadPayment();
    }, []);

    const onSubmit = async (e) => {
        e.preventDefault();
        await updatePayment(id, payment)
        navigate("/all-payments");
    };

    const loadPayment = async () => {
        const result = await getSinglePayment(id)
        setPayment(result);
    };

    return (
        <div className="container">
            <div className="row">
                <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
                    <h2 className="text-center m-4">Edit Payment Details</h2>
                    <form onSubmit={onSubmit}>






                        <div className="mb-3">
                            <label htmlFor="Location" className="form-label">
                                Email
                            </label>
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Enter Location"
                                name="email"
                                value={email}
                                onChange={onInputChange}
                            />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="Location" className="form-label">
                                Phone
                            </label>
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Enter Location"
                                name="phoneNumber"
                                value={phoneNumber}
                                onChange={onInputChange}
                            />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="Location" className="form-label">
                                Amount
                            </label>
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Enter Location"
                                name="amount"
                                value={amount}
                                onChange={onInputChange}
                            />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="Location" className="form-label">
                                Hotel ID
                            </label>
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Enter Location"
                                name="hotlId"
                                value={hotelId}
                                onChange={onInputChange}
                            />
                        </div>
                        <button type="submit" className="btn btn-outline-success">
                            Submit
                        </button>
                        <Link className="btn btn-outline-danger mx-2" to="/all-payments">
                            Cancel
                        </Link>
                    </form>
                </div>
            </div>
        </div>
    );
}
