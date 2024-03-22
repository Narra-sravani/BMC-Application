import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Dropdown } from 'bootstrap';
import DatePicker from 'react-datepicker';
import { mockBookings } from "../mockBookings";
import FilterNav from "../Dashboard/FilterNav";
import './style.css';

const Bookings = () => {
  const [searchInput, setSearchInput] = useState('');
  const [selectedFilter, setSelectedFilter] = useState('All');
  const [filteredBookings, setFilteredBookings] = useState(mockBookings);
  const [searchPlaceholder, setSearchPlaceholder] = useState('Search');

  const handleSearchInputChange = (event) => {
    setSearchInput(event.target.value);
  };

  const handleFilterSelection = (filterItem) => {
    filterBookings(filterItem);
  };

  const filterBookings = (status) => {
    if (status === 'All') {
      setFilteredBookings(mockBookings);
    } else {
      const filteredData = mockBookings.filter(booking => booking.status === status);
      setFilteredBookings(filteredData);
    }
  };

  const handleGoButtonClick = () => {
    const filteredData = mockBookings.filter((booking) => {
      switch(selectedFilter) {
        case 'Order Number':
          return booking.bookingId && booking.bookingId.includes(searchInput);
        case 'Phone Number':
          return booking.customerInfo && booking.customerInfo.includes(searchInput);
        case 'Email ID':
          return booking.customerInfo && booking.customerInfo.includes('@') && booking.customerInfo.includes(searchInput);
        default:
          return true;
      }
    });
    setFilteredBookings(filteredData);
  };
  
  const handleDropdownSelect = (type) => {
    switch(type) {
      case 'phoneNumber':
        setSearchInput(''); 
        setSelectedFilter('Phone Number'); 
        setSearchPlaceholder('Search by Phone Number');
        break;
      case 'emailId':
        setSearchInput(''); 
        setSelectedFilter('Email ID');
        setSearchPlaceholder('Search by Email ID');
        break;
      default:
        setSearchInput(''); 
        setSelectedFilter('Order Number'); 
        setSearchPlaceholder('Search by Order Number');
        break;
    }
    setFilteredBookings(mockBookings); // Reset filtered bookings to initial state
  };
  

  const handleRefreshButtonClick = () => {
    window.location.reload(); 
  };

  useEffect(() => {
    handleDropdownSelect('orderNumber');
  }, []); 

  return (
    <div>
      <div className="d-flex justify-content-between align-items-center border-bottom pb-2 mb-3">
        <h3 className='m-3'>Bookings</h3>
        <div className="input-group flex-grow-1" style={{ border: "none", justifyContent: 'flex-end' }}>
          <button className="btn btn-secondary dropdown-toggle" type="button" id="orderDropdownMenu" data-bs-toggle="dropdown" aria-expanded="false" style={{ marginRight: '5px', backgroundColor: "#efefef", color: "black", border: "none" }}>
            {selectedFilter}
          </button>
          <ul className="dropdown-menu" aria-labelledby="orderDropdownMenu" style={{ border: "none", minWidth: "30px" }}>
            {(selectedFilter !== 'Order Number') && <li><button className="dropdown-item" onClick={() => handleDropdownSelect('orderNumber')}>Order Number</button></li>}
            <li><button className="dropdown-item" onClick={() => handleDropdownSelect('phoneNumber')}>Phone Number</button></li>
            <li><button className="dropdown-item" onClick={() => handleDropdownSelect('emailId')}>Email ID</button></li>
          </ul>
          <input type="text" value={searchInput} onChange={handleSearchInputChange} placeholder={searchPlaceholder} aria-label="Search" aria-describedby="searchButton" style={{ fontSize: '0.875rem', padding: '0.25rem 0.5rem', border: 'none', border: "1px solid gray",borderRadius:"4px" }} />
          <button className="btn btn-primary" type="button" id="searchButton" style={{ backgroundColor: '#BF4A27', marginLeft: '-1px',border:"none" }} onClick={handleGoButtonClick}>Go</button>
        </div>
        <button className="btn btn-primary" style={{ backgroundColor: "#BF4A27", border: "none", margin: "10px" }} onClick={handleRefreshButtonClick}>Refresh</button>
      </div>
      <FilterNav handleFilterSelection={handleFilterSelection} />
      <div>
        <div className="container-fluid m-1 mt-3" style={{ border: "2px solid #ddd", borderRadius: "10px" }}>
          <div className="table-responsive">
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
                {filteredBookings.map((booking, index) => (
                  <tr key={index}>
                    <td className="small-font" style={{color:"#b74a28",textShadow: "7 0 6px #b74a28",fontWeight: "bold"}}>{booking.bookingId}</td>
                    <td className="small-font">
                      <p>{booking.customerInfo}</p>
                    </td>
                    <td className="small-font">{booking.requestedOn}</td>
                    <td className="small-font">{booking.address}</td>
                    <td className="small-font">{booking.when}</td>
                    <td className="small-font">{booking.type}</td>
                    <td className="small-font">{booking.cuisine}</td>
                    <td className="small-font">{booking.paymentStatus}</td>
                    <td className="small-font">{booking.amount}</td>
                    <td className="small-font">{booking.status}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Bookings;
