import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import logobmc from "../assets/logobmc.jpg";
import BmcMain from './BmcMain';
import { Link } from 'react-router-dom';
import "./navbarstyle.css";

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
                            <Link  className="nav-link text-dark">Home</Link>

                            </li>
                            <li className="nav-item me-2">
                                <Link to="/bookings" className="nav-link text-dark">Dashboard</Link>
                            </li>
                            <li className="nav-item me-2">
                            <Link  className="nav-link text-dark">How it works</Link>
                            </li>
                            <li className="nav-item me-2">
                            <Link  className="nav-link text-dark">Testimonials</Link>
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
