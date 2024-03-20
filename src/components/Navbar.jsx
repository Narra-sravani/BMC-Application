import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import logobmc from "../assets/logobmc.jpg";
import BmcMain from './BmcMain';

const Navbar = () => {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-white">
                <div className="container">
                    <a className="navbar-brand" href="#">
                        <img src={logobmc} alt="icon" width="70" height="70" className="d-inline-block align-top" style={{ borderRadius: '10%' }} />
                    </a>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                            <li className="nav-item me-2">
                                <a className="nav-link text-dark active" aria-current="page" href="#">Home</a>
                            </li>
                            <li className="nav-item me-2">
                                <a className="nav-link text-dark" href="/bookings" target="_blank">Dashboard</a>
                            </li>
                            <li className="nav-item me-2">
                                <a className="nav-link text-dark" href="#">How it works</a>
                            </li>
                            <li className="nav-item me-2">
                                <a className="nav-link text-dark" href="#">Testimonials</a>
                            </li>
                            <li className="nav-item">
                                <button className='btn btn-primary' style={{ width: '100px', backgroundColor: '#BF4A27', borderRadius: "10px", border: "none" }}>Contact us</button>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Navbar;
