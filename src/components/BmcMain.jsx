import React from 'react';
import chefbmc from "../assets/chefbmc.jpg";

const BmcMain = () => {
    return (
        <div className="container-fluid p-0">
            <div className="row m-0">
                {/* First Half */}
                <div className="col-lg-6 p-4 " style={{ background: "#BF4A27", color: "white", height: "100vh" }}>
                    <div style={{ fontSize: "30px" }}>
                        UNLEASH YOUR CULINARY JOURNEY WITH BOOKMYCHEF<br />
                        <span style={{ fontSize: "20px" }}>Ready to turn your love for cooking into some extra dough?</span>
                    </div>
                    <div className="card m-5 " style={{ width: "30rem", height: "25rem", borderRadius:"15px" }}>
                        <div className="card-body d-flex flex-column justify-content-center align-items-center">
                               <form>
                                <div className="mb-3">
                                    <input type="text" className="form-control" placeholder="Name" />
                                </div>
                                <div className="mb-3">
                                    <input type="text" className="form-control" placeholder="Mobile No" />
                                </div>
                                <div className="mb-3">
                                    <input type="email" className="form-control" placeholder="Email" />
                                </div>
                                <div className="mb-3">
                                    <input type="text" className="form-control" placeholder="Service we provide" />
                                </div>
                                <div className="mb-3">
                                    <input type="text" className="form-control" placeholder="Location" />
                                </div>
                                <div className="form-check mb-3 ">
                                    <input className="form-check-input " type="checkbox" id="privacyCheck" />
                                    <label className="form-check-label" style={{color:"black"}} htmlFor="privacyCheck">
                                        By clicking on this, you have agreed to accept our Privacy Policy.
                                    </label>
                                </div>
                            </form>
                            <button className='btn btn-primary' style={{ width: '90%', backgroundColor: '#BF4A27',borderRadius:"15px",border: "none" }}>Save</button>

                        </div>
                    </div>
                </div>

                {/* Second Half */}
                <div className="col-lg-6 p-5" style={{ background: "#BF4A27", height: "100vh", overflow: "hidden" }}>
                    <img src={chefbmc} alt="Big Size Image" className="img-fluid" style={{ height: '100%', width: 'auto' }} />
                </div>
            </div>
        </div>
    );
};

export default BmcMain;
