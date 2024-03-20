import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
import { Dropdown } from 'bootstrap';
import DatePicker from 'react-datepicker';
import { mockBookings } from "../mockBookings";

const Bookings = () => {
  useEffect(() => {
    // Initialize Bootstrap components that require JavaScript
    const dropdowns = document.querySelectorAll('.dropdown-toggle');
    dropdowns.forEach((dropdown) => new Dropdown(dropdown)); // Use Dropdown component instead of bootstrap.Dropdown
  }, []);

  return (
    <div>
      <div className="d-flex justify-content-between align-items-center border-bottom pb-2 mb-3">
        <h3 className='m-3'>Bookings</h3>
        {/* Search Input and Dropdown */}
        <div className="input-group flex-grow-1" style={{ border: "none", justifyContent: 'flex-end' }}>
          <button className="btn btn-secondary dropdown-toggle" type="button" id="orderDropdownMenu" data-bs-toggle="dropdown" aria-expanded="false" style={{ marginRight: '5px','backgroundColor':"#efefef" ,color:"black",border:"none"}}>
            Order Number
          </button>
          <ul className="dropdown-menu" aria-labelledby="orderDropdownMenu">
            <li><a className="dropdown-item" href="#">Order 1</a></li>
            <li><a className="dropdown-item" href="#">Order 2</a></li>
            <li><a className="dropdown-item" href="#">Order 3</a></li>
          </ul>
          <input type="text" placeholder="Search by order number" aria-label="Search by order number" aria-describedby="searchButton" style={{ fontSize: '0.875rem', padding: '0.25rem 0.5rem', border: 'none', textAlign: 'right' , border:"1px solid gray"}} />
          <button className="btn btn-primary" type="button" id="searchButton" style={{ backgroundColor: '#BF4A27', borderColor: '#FFA500', marginLeft: '-1px' }}>Go</button>
        </div>
        {/* Refresh Button */}
        <button className="btn btn-primary" style={{ backgroundColor: "#BF4A27", border: "none", margin:"10px"}}>Refresh</button>
      </div>
      <div>
        <div className="container-fluid m-1" style={{border:"1px solid gray", borderRadius:"10px"}}>
          <table className="table table-striped">
            <thead>
              <tr>
                <th>Booking Id</th>
                <th>Customer Info</th>
                <th>Requested on</th>
                <th>Address</th>
                <th>When</th>
                <th>Type</th>
                <th>Cuisine</th>
                <th>Payment status</th>
                <th>Amount</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {mockBookings.map((booking, index) => (
                <tr key={index}>
                  <td>{booking.bookingId}</td>
                  <td>
                    <p>{booking.customerInfo}</p>
                  </td>
                  <td>{booking.requestedOn}</td>
                  <td>{booking.address}</td>
                  <td>{booking.when}</td>
                  <td>{booking.type}</td>
                  <td>{booking.cuisine}</td>
                  <td>{booking.paymentStatus}</td>
                  <td>{booking.amount}</td>
                  <td>{booking.status}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default Bookings;
