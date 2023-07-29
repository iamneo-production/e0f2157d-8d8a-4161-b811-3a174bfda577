import React from 'react';
import { Link } from 'react-router-dom';

export default function AdminNavbar() {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
                <div class="container-fluid">
                    <Link className="navbar-brand" to="/all-bookings">Explora.com</Link>
                    <ul className='list-unstyled d-flex mt-2 mb-2'>
                        <li className='me-2'>
                            <Link className='btn btn-outline-light' to={'/all-hotels'}>Register Hotel</Link>
                        </li>
                        <li className='me-2'>
                            <Link className='btn btn-outline-light' to={'/all-rooms'}>Add Rooms</Link>
                        </li>
                        <li>
                            <Link className='btn btn-outline-light' to={'/all-managers'}>Register Hotel Manager</Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    )
}

